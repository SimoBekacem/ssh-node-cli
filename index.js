#!/usr/bin/env node
import "dotenv/config";
import { program } from "commander";
import chalk from "chalk";
import { input } from "@inquirer/prompts";
import os from "os";
import path from "path";
import fs from "fs";

program
  .version(process.env.VERSION)
  .description("CLI app to facilitate ssh")
  .action(async () => {
    const ipAddress = await input({
      message: "What is the server IP address?",
      validate: (value) => (value ? true : "Please enter a valid IP address"),
    });
    const username = await input({
      message: "What is the username?",
      validate: (value) => (value ? true : "Please enter a valid username"),
    });
    const port = await input({
      message: "What is the port?",
      validate: (value) => (value ? true : "Please enter a valid port"),
    });

    const alias = await input({
      message: "What is the alias?",
      validate: (value) => (value ? true : "Please enter a valid alias"),
    });

    const command = `ssh ${username}@${ipAddress} -p ${port}`;

    if (os.platform() === "win32") {
      createPowerShellAlias(alias, command);
      return;
    } else {
      console.log(chalk.red("Your os is not supported"));
    }
  });

function createPowerShellAlias(alias, command) {
  const powerShellPath = path.join(
    os.homedir(),
    "Documents",
    "WindowsPowerShell",
    "Microsoft.PowerShell_profile.ps1"
  );
  if (!fs.existsSync(powerShellPath)) {
    fs.writeFileSync(powerShellPath, "");
  }
  fs.appendFileSync(powerShellPath, `function ${alias} { ${command} }`);
  console.log(
    chalk.green(
      `Alias '${chalk.underline(alias)}' added! Restart PowerShell to use it.`
    )
  );
}

program.parse();
