# How to Config WSL and Docker

## Command:

### Enable WSL in windows: 
>`dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`

### Enable virtual machine feature:
>`dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`

### Download linux kernel update package:
>`https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi`

### Set WSL2 as default
>`wsl --set-default-version 2`

### List WSL2
>`wsl --list --verbose`

### Set distro linux to wsl2
> `wsl --set-version [distro] 2`

### Download the distro from Windows Store, e.g:
>`https://apps.microsoft.com/store/detail/9N6SVWS3RX71?hl=en-id&gl=ID`

---

## Setting in Docker
1. Open Docker
2. Goto Settings
3. Choose 'Resources' menu
4. Choose WSL INTEGRATION
5. Select the distro that you have installed before