# ask to user in cmd to enter the a option
import os
import sys
from dotenv import load_dotenv

load_dotenv()

sys.path.append("src")
# get all folders in the scripts folder
folders = os.listdir("scripts")

print("Select the option to access the scripts related to it:")
for index, name in enumerate([folder for folder in folders if os.path.isdir(f"scripts/{folder}")]):
  print(f"{index}: {name}")

print("x: Exit")
print("")

option = input("Enter the option: ")

if option in ["x", "X"]:
  exit()

folder_selected = folders[int(option)]

if not os.path.isdir(f"scripts/{folder_selected}"):
  print("Invalid option")
  exit()

files = os.listdir(f"scripts/{folder_selected}")

if len(files) == 0:
  print("No files found")
  exit()

for index, name in enumerate([file for file in files if file.endswith(".py")]):
  print(f"{index}: {name}")

option = input("Enter the option: ")

script_selected = files[int(option)]
if not script_selected.endswith(".py"):
  print("Invalid option")
  exit()

exec(open(f"scripts/{folder_selected}/{script_selected}").read())


