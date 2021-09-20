---
title: Dart CLI
description: Run and compile Dart programs from the command line
weight: 12
lastmod: 2021-09-18T11:11:30-09:00
draft: false
vimeo: 599073861
emoji: 💿
video_length: 1:51
---

## Create a New Dart Project

Learn about the available commands and how to use them.

{{< file "terminal" "command line" >}}
```bash
dart --help
```

Create a new project. 

{{< file "terminal" "command line" >}}
```bash
dart create -t console-simple my_app

# OR use the current directory (if it's empty)

dart create -t console-simple . --force
```

Run the application.

{{< file "terminal" "command line" >}}
```bash
dart run
```

## Compile Dart Code

Compile dart code to an executable.

{{< file "terminal" "command line" >}}
```bash
dart compile exe bin/dart.dart
bin/dart.exe
```

Compile your code to JavaScript and run it with Node.js. 

{{< file "terminal" "command line" >}}
```bash
dart compile js bin/dart.dart
node out.js
```