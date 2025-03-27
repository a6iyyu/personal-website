---
title: "Getting to Know Programming with Classic Languages: Lua and Fortran"
description: Dive into the history, how things work, and practical applications of classic programming languages such as Lua and Fortran, some of which are still relevant today.
tags: [programming]
date: 2024-12-30
reading_time: 15
thumbnail: ""
---

# Getting to Know Programming with Classic Languages: Lua and Fortran


Programming languages have been around for decades, and some of them are still widely used today. In this article, we'll explore two classic programming languages, i.e. Lua and Fortran. We'll dive into their history, how they work, and why they are still relevant in modern applications.

## Introduction

Lua is a lightweight and flexible programming language known for being simple but powerful. It is designed to be embedded into other applications, making it a popular choice for scripting. Lua is widely used in the gaming industry to control game logic and AI behavior. It is also used in web development to create dynamic websites and interactive applications.

Lua was first created in 1993 by Roberto Ierusalimschy, Luiz Henrique de Figueiredo, and Waldemar Celes at the Pontifical Catholic University of Rio de Janeiro (PUC-Rio), Brazil. Their goal was to develop a language that was fast, efficient, and easy to embed into other software. One of Lua’s key features is dynamic typing, meaning you don’t need to specify the type of data a variable will hold. This makes coding more flexible and faster.

Over the years, Lua has become one of the most popular scripting languages in game engines like Unity and World of Warcraft. Its simplicity and adaptability make Lua a favorite for developers working on various types of software.

On the other hand, Fortran (short for Formula Translation) is one of the oldest programming languages still in use today. It was developed by IBM in the 1950s for scientific and engineering purposes. Fortran was designed to be easier to read and write compared to assembly language, making it a popular choice for numerical computing and data processing.

Fortran is known for its speed and efficiency, making it ideal for handling complex math calculations and scientific simulations. Today, Fortran is still used in fields like physics, engineering, meteorology, and astrophysics, especially for weather modeling and fluid dynamics.

Over the decades, Fortran has continued to evolve with new versions like Fortran 77, Fortran 90, and Fortran 2008, adding modern features like object-oriented programming and parallel computing. Even after more than 60 years, Fortran remains a top choice for scientists and engineers because of its ability to handle heavy computational tasks quickly and efficiently.


## Install Lua

The Lua programming language is rarely mentioned among many programmers today, and its official documentation can feel outdated. Installing Lua on your device requires patience and attention to detail to ensure it runs smoothly. Therefore, the following section will guide you through the steps to download and install Lua on Windows.

- Visit LuaBinaries on <a href="https://luabinaries.sourceforge.net/download.html" target="_blank" class="text-blue-700 visited:text-purple-600 lg:hover:text-blue-500">SourceForge</a>. If your device runs Windows 64-bit, download **lua-5.4.2_Win64_bin.zip** and **lua-5.4.2_Win64_dllw6_lib.zip**. Otherwise, for Windows 32-bit, download **lua-5.4.2_Win32_bin.zip** and **lua-5.4.2_Win32_dllw6_lib.zip**.
- Choose a location with available space and create a new folder named **lua** for easy access. For example, create the folder at **C:/lua**.
- Move the downloaded zip files to the newly created folder (C:/lua) and extract them.
- You can simplify the file names by removing the version number. Rename **lua54.exe** to **lua.exe**, **luac54.exe** to **luac.exe**, and **wlua54.exe** to **wlua.exe**. Except for **lua54.dll**, don’t try to rename it or your Lua installation will not be detected by the device.
- Open the Start Menu and search for **Edit the system environment variables**. In the User Variables section, click New.
- Enter a variable name (**e.g., Lua**) and set the path to the Lua folder (**e.g., C:/lua**). Click OK to save the changes.
- Then, open the Command Prompt and type **lua** to check if the installation was successful.


## Writing Syntax and How To Run the First Program In Lua

When talking about the first program in any language, two magical words often come to mind — “Hello World.” It’s a fun and classic tradition. Interestingly, writing a “Hello World” program in Lua looks almost identical to Python. Yes, you heard that right! Here’s a look at the Lua syntax and how to run it.

First, create a new file named **hello-world.lua** and get ready to dive into the Lua environment.

```lua
print("Hello, World!")
```

Next, press **CTRL + `** to open a new terminal. In the terminal, type **lua hello-world.lua**.

```bash
>> lua hello-world.lua
Hello, World!
```

And just like that — TADA! Your first Lua program is up and running!

## Pros and Cons of Lua

Even if you’re just getting to know Lua through the classic “Hello World” program, you might already notice how its syntax feels a lot like natural language. Lua’s simplicity makes it a scripting language, meaning it uses dynamic typing. While this flexibility is great, it often comes with a trade-off — Lua can be slower, much like Python.


Let’s take a closer look at the pros and cons of Lua.

**Pros**
- **Simple and Clean Syntax —** With only about 22 basic keywords, learning Lua feels straightforward and beginner-friendly.
- **Highly Flexible —** Lua doesn’t lock you into strict rules, so you can shape it to fit different project needs.
- **Dynamic Typing** — You don’t need to specify the type of variables, Lua figures it out while the program runs.

**Cons**
- **Small Community —** It has a very small community of users, still relatively unknown next to Perl and Python languages.
- **Minimal Built-in Libraries —** Lua’s standard library is small, meaning you may need to write more code or rely on external libraries for advanced features. For example:
```txt
// example.txt
Hello, World!
```

```lua
-- readfile.lua
local file = io.open("example.txt", "r")

if file then
  local content = file:read("a")
  print(content)
  file:close()
else
  print("File not found!")
end
```

The code above shows how Lua requires several manual steps to open and read files. And the result will be:
```bash
>> lua readfile.lua
Hello, World!
```

- **Lack of Native Multithreading —** Lua doesn’t support true multithreading out of the box, which can limit performance for more complex or parallel tasks. For example:
```lua
for i = 1, 5 do
  print("Task " ..i.. " started.")
  os.execute("sleep 1")
  print("Task " ..i.. " finished.")
end
```

And the result will be:

```bash
>> lua main.lua
Task 1 started.
'sleep' is not recognized as an internal or external command, operable program or batch file.
Task 1 finished.
Task 2 started.
'sleep' is not recognized as an internal or external command, operable program or batch file.
Task 2 finished.
Task 3 started.
'sleep' is not recognized as an internal or external command, operable program or batch file.
Task 3 finished.
```

---

## Install Fortran

On the other hand, the Fortran programming language is rarely mentioned today due to its declining popularity amidst the evolving tech stack. A few decades ago, Fortran was widely used by scientists, engineers, and researchers for tasks involving complex mathematical calculations, simulations, and data analysis. Despite its limited community and the difficulty in finding resources for installing Fortran, the following section will guide you through the steps to install Fortran on Windows.

- Visit the **MinGW - Minimalist GNU for Windows** project page on <a href="https://sourceforge.net/projects/mingw/" target="_blank" class="text-blue-700 visited:text-purple-600 lg:hover:text-blue-500">SourceForge</a>. Click the download button to obtain the installer. The downloaded file will be named **mingw-get-setup.exe**.
- Once the download is complete, open the executable file to begin the installation process. Click the **Install** button and keep the default settings, just click the **Continue** button. The installer will proceed to set up MinGW on your system.
- After the installation finishes, launch the MinGW Installation Manager. In the manager, navigate to select the **mingw-developer-toolkit**, **mingw32-base**, and **mingw32-gcc-fortran**.
- **[Optional]** If you want to install additional programming languages, you can also check options like **mingw32-gcc-ada** (ADA Language), **mingw32-gcc-g++** (C++ Language), or **mingw32-gcc-objc** (Objective-C Language).
- Once the necessary components are selected, click **Mark for Installation**, then go to the **Installation** tab in the menu bar and choose **Apply Changes**.
- A confirmation window will appear—click **Apply** to proceed. The selected components, including Fortran, will begin downloading and installing.
- After the installation completes, go to the **Start Menu** and search **Edit the system environment variables**. In the **System Variables** section, **click New**.
- Set the path to the bin folder of MinGW (**e.g., C:\MinGW\bin**). Click **OK** to save the changes.
- Then, open the Command Prompt and type **gfortran -v** to check if the installation was successful.

## Writing Syntax and How To Run the First Program In Fortran

Once again, we turn to the classic “Hello World” program. To me, writing Fortran feels like following a process with a clear beginning and end. It’s worth noting that Fortran comes in several versions, including Fortran 1990, Fortran 1995, Fortran 2003, and Fortran 2008 — as listed by MinGW.

In this guide, we’ll write your first Fortran program using the 2008 version and walk through how to run it. Let’s dive into the world of Fortran!

First, create a new file named **hello-world.f08** and prepare to explore the Fortran environment.
```f08
program hello_world
  implicit none
  print *, "Hello, World!"
end program
```

Next, press **CTRL + `** to open a new terminal. In the terminal, type **gfortran hello-world.f08 -o hello-world.exe**. This command compiles your Fortran 2008 program and generates an executable file named **hello-world.exe**.

To run the program, type **./hello-world.exe** to see the result.

```bash
>> gfortran hello-world.f08 -o hello-world.exe
>> ./hello-world.exe
Hello, World!
```

And — TADA! Your first Fortran 2008 program is successfully running!

## Pros and Cons of Fortran

While Lua has a syntax that is more similar to human language, Fortran is more challenging for beginners due to its more technical and rigid structure. However, despite its perceived difficulty in learning, Fortran has endured for decades thanks to its strength in mathematical calculations and scientific applications. Its reliability in handling numerical computations and complex data analysis has kept Fortran relevant in some fields, despite its declining popularity in the era of modern programming languages.

Let’s take a closer look at the pros and cons of Fortran.

**Pros**
- **Better performance —** Fortran is designed to tightly optimize code, making it difficult to write slow code.
- **Suitable for scientific computing —** Fortran supports multidimensional arrays and number structures naturally, facilitating scientific calculations.
- **Excellent compatibility —** Fortran ensures the code remains compatible with previous versions, allowing the code to last a long time without major changes.

**Cons**
- **String Management Issues —** Fortran has limited string management capabilities, including a less effective string concatenation function. For example:

```f08
program concat_string
  implicit none

  character(len=4) :: name = "John"
  character(len=3) :: surname = "Doe"

  result = trim(adjustl(name)) // '' // trim(adjustl(surname))

  print *, "My friend's name is", result
end program
```

And do you know what the result is? The code above will generate an error because we haven’t specified a type for the “result” variable. So, the correct code is:

```f08
program concat_string
  implicit none

  character(len=4) :: name = "John"
  character(len=3) :: surname = "Doe"
  character(len=8) :: result

  result = trim(adjustl(name)) // ' ' // trim(adjustl(surname))

  print *, "My friend's name is ", result
end program
```

There’s something even weirder. Suppose we reduce the len=“4” of the variable “name” to len=“3”, what will happen?

```bash
>> ./main.exe
My friend's name is Joh Doe
```

Yep, the output will be “Joh Doe” only.

- **Use of References for Argument —** When calling subroutines, Fortran sends data via references instead of values, which may affect data protection.
- **GOTO Usage —** In some cases, program flow control in Fortran still uses GOTO statements, which makes the code harder to follow and more error-prone.

---

## Resources

- [The Evolution of Lua](https://www.lua.org/doc/hopl.pdf), accessed on December 31, 2024.
- [Wikibooks: Lua Programming](https://en.wikibooks.org/wiki/Lua_Programming), accessed on December 31, 2024.
- [The History of FORTRAN](https://www.obliquity.com/computer/fortran/history.html), accessed on December 31, 2024.
- [Keywords](https://github.com/e3b0c442/keywords), accessed on December 31, 2024.
- [The Lua Programming Language Beginner’s Guide](https://www.bmc.com/blogs/lua-programming-language/), accessed on December 31, 2024.
- [Educba: Lua programming](https://www.educba.com/lua-programming/), accessed on December 31, 2024.
- [What Is Fortran? Working, Applications, Benefits, and Challenges](https://www.spiceworks.com/tech/tech-general/articles/what-is-fortran/), accessed on December 31, 2024.