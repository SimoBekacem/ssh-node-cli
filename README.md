# SSH-Node-CLI

**SSH-Node-CLI** is a Node.js CLI application that simplifies creating aliases for connecting to Linux servers. This version is designed to work exclusively with Windows OS.

## Requirements

Before using **SSH-Node-CLI**, ensure the following setup:

1. **PowerShell Profile File**  
   Confirm that the file `\Users\<YourUsername>\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1` exists.

   - If it does not exist, create it by running the following command in PowerShell:
     ```powershell
     New-Item -ItemType File -Path $PROFILE -Force
     ```
   - Verify the file was created successfully by running:
     ```powershell
     Test-Path $PROFILE
     ```
     This should return **true**.

2. **Execution Policy**  
   Update the execution policy to allow running scripts by running:
   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
   This step ensures you can create and run aliases.

## Installation

Install **SSH-Node-CLI** globally using npm:

```bash
npm install -g ssh-cli
```

## Usage

To use **SSH-Node-CLI**, follow these steps:

1. Run the CLI by typing:
   ```bash
   ssh-cli
   ```
2. Fill in the required information (e.g., IP address, username, port, and command).
3. Verify the alias is created successfully by opening the `Microsoft.PowerShell_profile.ps1` file and checking for the new entry.

You can now use the alias directly from PowerShell to connect to your Linux server.

## Contributing

Feel free to use this application! If you find it helpful, consider giving it a ⭐ to support its development. Contributions are welcome!
