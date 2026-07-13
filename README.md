# Windows Optimization & Customization Guide

A curated collection of tools for debloating, configuring, cleaning, and securing Windows 10 and 11.

Project status and compatibility notes were last reviewed in July 2026.

This list is not an endorsement of every tweak a tool offers. Windows builds change, projects age, and two tools may apply conflicting policies. Check the project's current compatibility notes before making changes.

> [!IMPORTANT]
> Windows 10 Home and Pro reached end of support on October 14, 2025. A tool supporting Windows 10 does not make an unsupported Windows installation secure. See [Microsoft's Windows 10 support guidance](https://support.microsoft.com/en-us/windows/windows-10-support-ends-on-october-14-2025-2ca8b313-1946-43d3-b55c-2b95b107f281).

## Contents

- [Before You Start](#before-you-start)
- [Quick Reference](#quick-reference)
- [System Optimization & Debloating](#system-optimization--debloating)
- [Privacy, Telemetry & Network Control](#privacy-telemetry--network-control)
- [AI, Copilot & Recall Removal](#ai-copilot--recall-removal)
- [UI Customization & Ricing](#ui-customization--ricing)
- [Disk & File Management](#disk--file-management)
- [Gaming & Performance](#gaming--performance)
- [Windows Setup & Upgrade](#windows-setup--upgrade)
- [Alternative Windows Configurations](#alternative-windows-configurations)
- [Advanced & High-Impact Tools](#advanced--high-impact-tools)
- [Legacy Tools](#legacy-tools)
- [Guides & Documentation](#guides--documentation)

## Before You Start

- **Back up first:** Create a tested system image or, at minimum, a restore point. Restore points do not recover every removed package, file, or boot failure.
- **Review every action:** Read the tool's documentation and inspect scripts before running them as administrator. Avoid piping mutable remote scripts directly into PowerShell when a reviewed release is available.
- **Change one layer at a time:** Do not stack debloat suites or apply every preset. Overlapping registry, policy, service, and package changes are difficult to diagnose or reverse.
- **Keep security features intentionally:** Disabling Defender, SmartScreen, Windows Update, UAC, VBS, or CPU mitigations is a security trade-off, not a general optimization.
- **Understand rollback:** An undo button may restore a Windows default rather than your previous value. App removal, cleanup, component removal, and custom ISO changes may require reinstallation.
- **Measure performance:** Lower process counts and free RAM do not automatically mean better responsiveness, frame rates, or latency. Benchmark changes against your own workload.

## Quick Reference

| Need | Starting point | Scope | Notes |
| --- | --- | --- | --- |
| General Windows 11 maintenance | [WinUtil](https://github.com/ChrisTitusTech/winutil) | Windows 11 | Apps, tweaks, repairs, updates, and installation media |
| Debloat with configurable choices | [Win11Debloat](https://github.com/Raphire/Win11Debloat) | Windows 10/11 | Interactive UI and command-line automation |
| Privacy settings without broad cleanup | [O&O ShutUp10++](https://www.oo-software.com/en/shutup10) | Windows 10/11 | Recommended profiles and individual privacy policies |
| Detailed, auditable configuration | [Sophia Script](https://github.com/farag2/Sophia-Script-for-Windows) | Supported Windows 10/11 builds | Advanced PowerShell module with granular functions |
| Remove Windows AI components | [RemoveWindowsAI](https://github.com/zoicware/RemoveWindowsAI) | Current stable Windows 10/11 builds | Aggressive removal; read its backup and revert documentation |

These tools overlap. The table helps choose a starting point; it is not a recommendation to run them together.

## System Optimization & Debloating

### [WinUtil](https://github.com/ChrisTitusTech/winutil)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/ChrisTitusTech/winutil?label=last%20release)](https://github.com/ChrisTitusTech/winutil/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/ChrisTitusTech/winutil)](https://github.com/ChrisTitusTech/winutil/commits) [![Contributors](https://img.shields.io/github/contributors/ChrisTitusTech/winutil?label=contributors)](https://github.com/ChrisTitusTech/winutil/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/ChrisTitusTech/winutil)](https://github.com/ChrisTitusTech/winutil/stargazers)
<!-- github-project-badges:end -->

Actively maintained Windows 11 utility from Chris Titus Tech for installing and updating applications, applying configurable tweaks, running common repairs, controlling update behavior, and creating Windows 11 installation media. Many tweaks have explicit undo actions, but cleanup and package removal are not universally reversible. See the [WinUtil documentation](https://winutil.christitus.com/).

### [Win11Debloat](https://github.com/Raphire/Win11Debloat)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/Raphire/Win11Debloat?label=last%20release)](https://github.com/Raphire/Win11Debloat/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/Raphire/Win11Debloat)](https://github.com/Raphire/Win11Debloat/commits) [![Contributors](https://img.shields.io/github/contributors/Raphire/Win11Debloat?label=contributors)](https://github.com/Raphire/Win11Debloat/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/Raphire/Win11Debloat)](https://github.com/Raphire/Win11Debloat/stargazers)
<!-- github-project-badges:end -->

PowerShell 5.1 tool for Windows 10 and 11 with an interactive interface and command-line automation. It covers app removal, telemetry and AI controls, Start/taskbar/Explorer customization, optional features, and update settings. It backs up modified registry settings, but removed apps must generally be reinstalled separately. See [Reverting Changes](https://github.com/Raphire/Win11Debloat/wiki/Reverting-Changes).

### [CrapFixer](https://github.com/builtbybel/CrapFixer)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/builtbybel/CrapFixer?label=last%20release)](https://github.com/builtbybel/CrapFixer/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/builtbybel/CrapFixer)](https://github.com/builtbybel/CrapFixer/commits) [![Contributors](https://img.shields.io/github/contributors/builtbybel/CrapFixer?label=contributors)](https://github.com/builtbybel/CrapFixer/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/builtbybel/CrapFixer)](https://github.com/builtbybel/CrapFixer/stargazers)
<!-- github-project-badges:end -->

Open-source Windows 10/11 analyzer and tweak utility from builtbybel. It covers advertising, privacy, telemetry, Edge, UI, gaming, AI, cleanup, and system settings. Most configuration tweaks have restore actions; cleanup and external extension scripts may not be reversible.

### [Winhance](https://github.com/memstechtips/Winhance)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/memstechtips/Winhance?label=last%20release)](https://github.com/memstechtips/Winhance/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/memstechtips/Winhance)](https://github.com/memstechtips/Winhance/commits) [![Contributors](https://img.shields.io/github/contributors/memstechtips/Winhance?label=contributors)](https://github.com/memstechtips/Winhance/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/memstechtips/Winhance)](https://github.com/memstechtips/Winhance/stargazers)
<!-- github-project-badges:end -->

Actively developed Windows 10/11 application for Windows and optional-app management, WinGet installs, optimization and customization settings, configuration export, unattended setup, and custom ISO creation. It records applied changes but does not provide transactional rollback. Winhance is free to use and source-available under the PolyForm Shield license.

### [Sparkle](https://github.com/thedogecraft/sparkle) `Beta`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/thedogecraft/sparkle?label=last%20release)](https://github.com/thedogecraft/sparkle/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/thedogecraft/sparkle)](https://github.com/thedogecraft/sparkle/commits) [![Contributors](https://img.shields.io/github/contributors/thedogecraft/sparkle?label=contributors)](https://github.com/thedogecraft/sparkle/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/thedogecraft/sparkle)](https://github.com/thedogecraft/sparkle/stargazers)
<!-- github-project-badges:end -->

Open-source Windows 10/11 dashboard with tweak presets, app debloating, cleanup, system utilities, DNS management, app installation, and restore-point support. Tweaks include unapply actions; file cleanup and app removal should not be treated as fully reversible.

### [Bloatynosy](https://github.com/builtbybel/Bloatynosy)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/builtbybel/Bloatynosy?label=last%20release)](https://github.com/builtbybel/Bloatynosy/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/builtbybel/Bloatynosy)](https://github.com/builtbybel/Bloatynosy/commits) [![Contributors](https://img.shields.io/github/contributors/builtbybel/Bloatynosy?label=contributors)](https://github.com/builtbybel/Bloatynosy/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/builtbybel/Bloatynosy)](https://github.com/builtbybel/Bloatynosy/stargazers)
<!-- github-project-badges:end -->

Windows 11-focused GUI for checking and adjusting common post-installation settings, privacy options, built-in apps, and other unwanted defaults. It may run on Windows 10, but not every setting applies there.

### [WinScript](https://github.com/flick9000/winscript)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/flick9000/winscript?label=last%20release)](https://github.com/flick9000/winscript/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/flick9000/winscript)](https://github.com/flick9000/winscript/commits) [![Contributors](https://img.shields.io/github/contributors/flick9000/winscript?label=contributors)](https://github.com/flick9000/winscript/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/flick9000/winscript)](https://github.com/flick9000/winscript/stargazers)
<!-- github-project-badges:end -->

Open-source web interface for assembling a custom Windows script from debloat, privacy, performance, application, and unattended-install modules. Generated scripts can remove major components and alter security, update, and service settings; review every selected operation before execution.

### [OptimizerNXT](https://github.com/hellzerg/optimizerNXT)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/hellzerg/optimizerNXT?label=last%20release)](https://github.com/hellzerg/optimizerNXT/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/hellzerg/optimizerNXT)](https://github.com/hellzerg/optimizerNXT/commits) [![Contributors](https://img.shields.io/github/contributors/hellzerg/optimizerNXT?label=contributors)](https://github.com/hellzerg/optimizerNXT/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/hellzerg/optimizerNXT)](https://github.com/hellzerg/optimizerNXT/stargazers)
<!-- github-project-badges:end -->

The successor to the archived Optimizer GUI. This YAML-driven command-line tool applies configurable packages on Windows 7-11 and supported Windows Server versions. Packages may change services, registry values, processes, networking, and apps, so test configurations in an isolated environment first.

## Privacy, Telemetry & Network Control

### [O&O ShutUp10++](https://www.oo-software.com/en/shutup10)

Portable privacy and telemetry settings panel for Windows 10 and 11. It explains individual policies, supplies recommended profiles, and can create a restore point. Review profile changes rather than assuming every recommended setting fits your system.

### [Sophia Script for Windows](https://github.com/farag2/Sophia-Script-for-Windows) `Advanced`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/farag2/Sophia-Script-for-Windows?label=last%20release)](https://github.com/farag2/Sophia-Script-for-Windows/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/farag2/Sophia-Script-for-Windows)](https://github.com/farag2/Sophia-Script-for-Windows/commits) [![Contributors](https://img.shields.io/github/contributors/farag2/Sophia-Script-for-Windows?label=contributors)](https://github.com/farag2/Sophia-Script-for-Windows/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/farag2/Sophia-Script-for-Windows)](https://github.com/farag2/Sophia-Script-for-Windows/stargazers)
<!-- github-project-badges:end -->

Actively maintained PowerShell module with more than 150 functions for supported Windows 10, Windows 11, LTSC, and ARM64 builds. It covers privacy, security, AI, personalization, apps, OneDrive, DNS-over-HTTPS, and other configuration. Functions are paired with ways to restore Windows defaults, which is not the same as restoring an exact pre-change snapshot.

### [W10Privacy](https://www.w10privacy.de/english-home/)

Detailed Windows 10/11 interface for privacy, telemetry, application, service, task, and update settings. Its optional fake-WSUS mode changes normal update behavior, and network blocking can interfere with Windows services, so read the [instructions](https://www.w10privacy.de/english-home/instructions-1/) before enabling those features.

### [simplewall](https://github.com/henrypp/simplewall) `Advanced`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/henrypp/simplewall?label=last%20release)](https://github.com/henrypp/simplewall/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/henrypp/simplewall)](https://github.com/henrypp/simplewall/commits) [![Contributors](https://img.shields.io/github/contributors/henrypp/simplewall?label=contributors)](https://github.com/henrypp/simplewall/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/henrypp/simplewall)](https://github.com/henrypp/simplewall/stargazers)
<!-- github-project-badges:end -->

Open-source Windows Filtering Platform frontend for Windows 7-11 on x64 and ARM64. Its default filtering model blocks unapproved applications, remains active when the UI is closed, and can survive uninstall unless filters are disabled first. It is not a frontend for Windows Firewall.

### [Portmaster by Safing](https://github.com/safing/portmaster)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/safing/portmaster?label=last%20release)](https://github.com/safing/portmaster/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/safing/portmaster)](https://github.com/safing/portmaster/commits) [![Contributors](https://img.shields.io/github/contributors/safing/portmaster?label=contributors)](https://github.com/safing/portmaster/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/safing/portmaster)](https://github.com/safing/portmaster/stargazers)
<!-- github-project-badges:end -->

Open-source Windows and Linux application firewall with per-app network controls, DNS filtering, and optional paid SPN routing. It installs a system service and Windows filtering driver, so it can affect DNS, VPN, and application connectivity.

### [privacy.sexy](https://privacy.sexy/)

Open-source desktop and web tool that generates system-modification scripts from selected privacy and security actions. It supports Windows 10+, macOS, and several Linux distributions. Review the generated commands before execution even when reversal scripts are available.

### [OFGB](https://github.com/xM4ddy/OFGB)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/xM4ddy/OFGB?label=last%20release)](https://github.com/xM4ddy/OFGB/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/xM4ddy/OFGB)](https://github.com/xM4ddy/OFGB/commits) [![Contributors](https://img.shields.io/github/contributors/xM4ddy/OFGB?label=contributors)](https://github.com/xM4ddy/OFGB/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/xM4ddy/OFGB)](https://github.com/xM4ddy/OFGB/stargazers)
<!-- github-project-badges:end -->

Open-source GUI for applying Windows 11 registry settings that disable advertising in Explorer, the lock screen, Settings, Start, and other shell surfaces.

## AI, Copilot & Recall Removal

Windows AI controls range from reversible policy toggles to forced servicing-package and file removal. Start with the least invasive option that meets your goal.

### [RemoveWindowsAI](https://github.com/zoicware/RemoveWindowsAI) `Advanced`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/zoicware/RemoveWindowsAI?label=last%20release)](https://github.com/zoicware/RemoveWindowsAI/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/zoicware/RemoveWindowsAI)](https://github.com/zoicware/RemoveWindowsAI/commits) [![Contributors](https://img.shields.io/github/contributors/zoicware/RemoveWindowsAI?label=contributors)](https://github.com/zoicware/RemoveWindowsAI/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/zoicware/RemoveWindowsAI)](https://github.com/zoicware/RemoveWindowsAI/stargazers)
<!-- github-project-badges:end -->

Aggressive PowerShell 5.1 script for disabling and removing Copilot, Recall, AI packages, app integrations, policies, services, tasks, and related files on current stable Windows 10/11 builds. It offers a UI, backup mode, and revert mode, but full reversion requires backup mode to have been enabled and is not guaranteed on Windows Home. Review the [documentation](https://github.com/zoicware/RemoveWindowsAI/blob/main/Documentation.md) and test in a virtual machine before using forced-removal options.

### Less Invasive Options

- [Win11Debloat](https://github.com/Raphire/Win11Debloat) includes configurable Copilot, Recall, Click to Do, and app AI settings alongside its normal debloat options.
- [CrapFixer](https://github.com/builtbybel/CrapFixer) includes AI-related checks and fixes as part of its broader settings analyzer.
- [Sophia Script](https://github.com/farag2/Sophia-Script-for-Windows) exposes granular Windows AI configuration functions for supported builds.

## UI Customization & Ricing

These tools customize wallpapers, widgets, window layouts, the taskbar, Start, Explorer, and other shell surfaces. Avoid stacking tools that modify the same component, and keep an uninstall or recovery path: Windows feature updates can break shell hooks and third-party visual styles.

### [Wallpaper Engine](https://store.steampowered.com/app/431960/Wallpaper_Engine/) `Proprietary, paid`

Steam application for animated and interactive wallpapers made from videos, websites, applications, and 2D or 3D scenes. It includes an editor, multi-monitor support, Steam Workshop sharing, and configurable pause or stop rules for fullscreen applications to limit resource use.

### [Lively Wallpaper](https://github.com/rocksdanister/lively)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/rocksdanister/lively?label=last%20release)](https://github.com/rocksdanister/lively/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/rocksdanister/lively)](https://github.com/rocksdanister/lively/commits) [![Contributors](https://img.shields.io/github/contributors/rocksdanister/lively?label=contributors)](https://github.com/rocksdanister/lively/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/rocksdanister/lively)](https://github.com/rocksdanister/lively/stargazers)
<!-- github-project-badges:end -->

Open-source animated wallpaper application for videos, GIFs, web pages, shaders, and other interactive content. It supports per-display layouts and can pause playback when games or fullscreen applications are active, making it the closest open-source alternative to Wallpaper Engine in this list.

### [Rainmeter](https://github.com/rainmeter/rainmeter)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/rainmeter/rainmeter?label=last%20release)](https://github.com/rainmeter/rainmeter/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/rainmeter/rainmeter)](https://github.com/rainmeter/rainmeter/commits) [![Contributors](https://img.shields.io/github/contributors/rainmeter/rainmeter?label=contributors)](https://github.com/rainmeter/rainmeter/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/rainmeter/rainmeter)](https://github.com/rainmeter/rainmeter/stargazers)
<!-- github-project-badges:end -->

Open-source desktop customization platform built around configurable skins for clocks, system monitors, media controls, launchers, visualizers, and other widgets. Skins and plugins can run commands or load native code, so install them only from sources you trust.

### [Windhawk](https://github.com/ramensoftware/windhawk) `Advanced`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/ramensoftware/windhawk?label=last%20release)](https://github.com/ramensoftware/windhawk/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/ramensoftware/windhawk)](https://github.com/ramensoftware/windhawk/commits) [![Contributors](https://img.shields.io/github/contributors/ramensoftware/windhawk?label=contributors)](https://github.com/ramensoftware/windhawk/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/ramensoftware/windhawk)](https://github.com/ramensoftware/windhawk/stargazers)
<!-- github-project-badges:end -->

Open-source marketplace and framework for installing source-visible mods that customize Windows and other programs, including the taskbar, Start menu, notification area, window chrome, and classic shell behavior. Windhawk works through process injection and API hooking; review each mod, its target processes, and its source before enabling it.

### [YASB Reborn](https://github.com/amnweb/yasb)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/amnweb/yasb?label=last%20release)](https://github.com/amnweb/yasb/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/amnweb/yasb)](https://github.com/amnweb/yasb/commits) [![Contributors](https://img.shields.io/github/contributors/amnweb/yasb?label=contributors)](https://github.com/amnweb/yasb/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/amnweb/yasb)](https://github.com/amnweb/yasb/stargazers)
<!-- github-project-badges:end -->

Open-source, highly configurable Windows status bar with CSS theming and widgets for workspaces, media, hardware, weather, applications, the system tray, and more. It integrates with GlazeWM and other window managers and provides a separate [theme repository](https://github.com/amnweb/yasb-themes).

### [GlazeWM](https://github.com/glzr-io/glazewm) `Advanced`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/glzr-io/glazewm?label=last%20release)](https://github.com/glzr-io/glazewm/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/glzr-io/glazewm)](https://github.com/glzr-io/glazewm/commits) [![Contributors](https://img.shields.io/github/contributors/glzr-io/glazewm?label=contributors)](https://github.com/glzr-io/glazewm/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/glzr-io/glazewm)](https://github.com/glzr-io/glazewm/stargazers)
<!-- github-project-badges:end -->

Open-source, i3-inspired tiling window manager with keyboard-driven commands, YAML configuration, workspaces, window rules, gaps, and multi-monitor support. It can be paired with Zebar or YASB for a themed status bar; expect to configure application exceptions and learn a different window-management workflow.

### [TranslucentTB](https://github.com/TranslucentTB/TranslucentTB)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/TranslucentTB/TranslucentTB?label=last%20release)](https://github.com/TranslucentTB/TranslucentTB/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/TranslucentTB/TranslucentTB)](https://github.com/TranslucentTB/TranslucentTB/commits) [![Contributors](https://img.shields.io/github/contributors/TranslucentTB/TranslucentTB?label=contributors)](https://github.com/TranslucentTB/TranslucentTB/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/TranslucentTB/TranslucentTB)](https://github.com/TranslucentTB/TranslucentTB/stargazers)
<!-- github-project-badges:end -->

Open-source utility for making the Windows 10 or 11 taskbar clear, translucent, acrylic, opaque, or custom-colored. Appearance can change dynamically when windows are maximized or Start, Search, or Task View is open.

### [Open-Shell](https://github.com/Open-Shell/Open-Shell-Menu)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/Open-Shell/Open-Shell-Menu?label=last%20release)](https://github.com/Open-Shell/Open-Shell-Menu/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/Open-Shell/Open-Shell-Menu)](https://github.com/Open-Shell/Open-Shell-Menu/commits) [![Contributors](https://img.shields.io/github/contributors/Open-Shell/Open-Shell-Menu?label=contributors)](https://github.com/Open-Shell/Open-Shell-Menu/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/Open-Shell/Open-Shell-Menu)](https://github.com/Open-Shell/Open-Shell-Menu/stargazers)
<!-- github-project-badges:end -->

Open-source continuation of Classic Shell that provides a skinnable classic-style Start menu plus selected Explorer toolbar and status-bar features on Windows 7-11. Shell behavior can change after Windows updates, so confirm compatibility with the current release before upgrading Windows.

### [ExplorerPatcher](https://github.com/valinet/ExplorerPatcher) `Advanced`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/valinet/ExplorerPatcher?label=last%20release)](https://github.com/valinet/ExplorerPatcher/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/valinet/ExplorerPatcher)](https://github.com/valinet/ExplorerPatcher/commits) [![Contributors](https://img.shields.io/github/contributors/valinet/ExplorerPatcher?label=contributors)](https://github.com/valinet/ExplorerPatcher/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/valinet/ExplorerPatcher)](https://github.com/valinet/ExplorerPatcher/stargazers)
<!-- github-project-badges:end -->

Open-source shell customization project for restoring or mixing Windows 10 and 11 taskbar, Start menu, Alt+Tab, and Explorer behavior. It loads code into Windows shell processes and is sensitive to build changes; use only its official GitHub releases, update it before major Windows upgrades, and retain its documented uninstall path.

### [SecureUxTheme](https://github.com/namazso/SecureUxTheme) `High risk`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/namazso/SecureUxTheme?label=last%20release)](https://github.com/namazso/SecureUxTheme/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/namazso/SecureUxTheme)](https://github.com/namazso/SecureUxTheme/commits) [![Contributors](https://img.shields.io/github/contributors/namazso/SecureUxTheme?label=contributors)](https://github.com/namazso/SecureUxTheme/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/namazso/SecureUxTheme)](https://github.com/namazso/SecureUxTheme/stargazers)
<!-- github-project-badges:end -->

Open-source enabler for unsigned third-party Windows visual styles without modifying system files or installing a driver. A theme that does not match the exact Windows version can cause broken controls or a sign-in loop, so keep a second administrator account or recovery environment available and read the project's recovery guidance first.

### [DWMBlurGlass](https://github.com/Maplespe/DWMBlurGlass) `Advanced`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/Maplespe/DWMBlurGlass?label=last%20release)](https://github.com/Maplespe/DWMBlurGlass/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/Maplespe/DWMBlurGlass)](https://github.com/Maplespe/DWMBlurGlass/commits) [![Contributors](https://img.shields.io/github/contributors/Maplespe/DWMBlurGlass?label=contributors)](https://github.com/Maplespe/DWMBlurGlass/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/Maplespe/DWMBlurGlass)](https://github.com/Maplespe/DWMBlurGlass/stargazers)
<!-- github-project-badges:end -->

Open-source Windows 10/11 utility that applies configurable blur, Aero, acrylic, or Mica effects to system title bars. It relies on undocumented Desktop Window Manager behavior and downloaded symbols, so Windows updates can temporarily break it; the project warns that unofficial repackaged downloads have contained malware.

## Disk & File Management

### [WinDirStat](https://windirstat.net/)

Open-source disk usage analyzer that visualizes files by directory and size.

### [WizTree](https://www.diskanalyzer.com/)

Fast disk usage analyzer that can read the NTFS Master File Table directly and also scan non-NTFS and network drives. It is proprietary freeware for personal use; commercial use requires a license.

### [Krokiet / Czkawka](https://github.com/qarmin/czkawka)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/qarmin/czkawka?label=last%20release)](https://github.com/qarmin/czkawka/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/qarmin/czkawka)](https://github.com/qarmin/czkawka/commits) [![Contributors](https://img.shields.io/github/contributors/qarmin/czkawka?label=contributors)](https://github.com/qarmin/czkawka/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/qarmin/czkawka)](https://github.com/qarmin/czkawka/stargazers)
<!-- github-project-badges:end -->

Open-source duplicate, similar-image, broken-file, and empty-folder finder for Windows, Linux, and macOS. Krokiet is the actively developed GUI; Czkawka's GTK GUI is being retired after its final binary release.

### [BleachBit](https://www.bleachbit.org/)

Open-source cleaner for temporary files, caches, browser data, and other application traces. Deletion and shredding have no undo, clearing caches can reduce performance temporarily, and free-space wiping is not useful on many SSD or fully encrypted setups.

## Gaming & Performance

Gaming presets often overlap with the debloat tools above. Test frame time, latency, stability, power use, and required features before keeping a change.

### [Intelligent Standby List Cleaner (ISLC)](https://www.wagnardsoft.com/intelligent-standby-list-cleaner-islc)

Monitors available memory and conditionally clears the Windows standby list. It may help specific memory-pressure or stutter cases, but its usefulness is workload-specific and clearing useful cache can cause additional reads.

### [Windows10GamingFocus](https://github.com/DaddyMadu/Windows10GamingFocus) `High risk`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/DaddyMadu/Windows10GamingFocus?label=last%20release)](https://github.com/DaddyMadu/Windows10GamingFocus/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/DaddyMadu/Windows10GamingFocus)](https://github.com/DaddyMadu/Windows10GamingFocus/commits) [![Contributors](https://img.shields.io/github/contributors/DaddyMadu/Windows10GamingFocus?label=contributors)](https://github.com/DaddyMadu/Windows10GamingFocus/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/DaddyMadu/Windows10GamingFocus)](https://github.com/DaddyMadu/Windows10GamingFocus/stargazers)
<!-- github-project-badges:end -->

Windows 10/11 gaming tweak collection that can disable or weaken Defender, SmartScreen, UAC, virtualization-based security, CPU mitigations, updates, and other protections. It also includes remote-desktop changes. Review individual scripts and security consequences; do not treat the full preset as a routine gaming optimization.

## Windows Setup & Upgrade

### [FlyOOBE (formerly Flyby11)](https://github.com/builtbybel/FlyOOBE)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/builtbybel/FlyOOBE?label=last%20release)](https://github.com/builtbybel/FlyOOBE/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/builtbybel/FlyOOBE)](https://github.com/builtbybel/FlyOOBE/commits) [![Contributors](https://img.shields.io/github/contributors/builtbybel/FlyOOBE?label=contributors)](https://github.com/builtbybel/FlyOOBE/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/builtbybel/FlyOOBE)](https://github.com/builtbybel/FlyOOBE/stargazers)
<!-- github-project-badges:end -->

Windows 10-to-11 setup and out-of-box-experience toolkit. Its Flyby11 Classic component can bypass some hardware checks during upgrade. Microsoft does not guarantee support, compatibility, or updates for Windows 11 installed on unsupported hardware; read [Microsoft's warning](https://support.microsoft.com/en-us/windows/windows-11-on-devices-that-don-t-meet-minimum-system-requirements-0b2dc4a2-5933-4ad4-9c09-ef0a331518f1) first.

## Alternative Windows Configurations

These options change the Windows installation itself rather than applying a few user-level preferences. Prefer stock, supported Windows plus selective tools above unless you understand the servicing, security, compatibility, support, and licensing implications.

> [!WARNING]
> Do not download unofficial pre-modified Windows ISOs. Use a legitimate Microsoft image and the project's published playbook or builder. Keep a reinstall path and valid Windows license available.

### [AtlasOS](https://github.com/Atlas-OS/Atlas) `Advanced`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/Atlas-OS/Atlas?label=last%20release)](https://github.com/Atlas-OS/Atlas/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/Atlas-OS/Atlas)](https://github.com/Atlas-OS/Atlas/commits) [![Contributors](https://img.shields.io/github/contributors/Atlas-OS/Atlas?label=contributors)](https://github.com/Atlas-OS/Atlas/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/Atlas-OS/Atlas)](https://github.com/Atlas-OS/Atlas/stargazers)
<!-- github-project-badges:end -->

Open-source AME Wizard playbook that applies privacy, usability, and performance changes to a supported Windows 11 installation. Current versions retain configurable Windows security and update features, unlike much older Atlas releases. Atlas is not a Microsoft-supported configuration, and reverting requires reinstalling Windows. Confirm the exact supported Windows edition and build in the [installation documentation](https://docs.atlasos.net/getting-started/installation/).

### [ReviOS](https://github.com/meetrevision/playbook) `High risk`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/meetrevision/playbook?label=last%20release)](https://github.com/meetrevision/playbook/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/meetrevision/playbook)](https://github.com/meetrevision/playbook/commits) [![Contributors](https://img.shields.io/github/contributors/meetrevision/playbook?label=contributors)](https://github.com/meetrevision/playbook/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/meetrevision/playbook)](https://github.com/meetrevision/playbook/stargazers)
<!-- github-project-badges:end -->

Community AME Wizard playbook for selected Windows 10/11 builds. It removes apps and components and applies extensive service, privacy, and performance changes. Its defaults can disable Defender components, SmartScreen, virtualization-based protections, and automatic updates. Use only if you have evaluated and accepted that security model.

### [tiny11builder](https://github.com/ntdevlabs/tiny11builder) `Advanced`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/ntdevlabs/tiny11builder?label=last%20release)](https://github.com/ntdevlabs/tiny11builder/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/ntdevlabs/tiny11builder)](https://github.com/ntdevlabs/tiny11builder/commits) [![Contributors](https://img.shields.io/github/contributors/ntdevlabs/tiny11builder?label=contributors)](https://github.com/ntdevlabs/tiny11builder/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/ntdevlabs/tiny11builder)](https://github.com/ntdevlabs/tiny11builder/stargazers)
<!-- github-project-badges:end -->

Open-source scripts for building a trimmed Windows 11 image from an official Microsoft ISO. The regular builder keeps the image serviceable. The separate tiny11 Core builder removes servicing, Windows Update, WinRE, and other components and is explicitly intended only for test or development environments.

## Advanced & High-Impact Tools

### [Windows-Optimize-Harden-Debloat](https://github.com/simeononsecurity/Windows-Optimize-Harden-Debloat)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/simeononsecurity/Windows-Optimize-Harden-Debloat?label=last%20release)](https://github.com/simeononsecurity/Windows-Optimize-Harden-Debloat/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/simeononsecurity/Windows-Optimize-Harden-Debloat)](https://github.com/simeononsecurity/Windows-Optimize-Harden-Debloat/commits) [![Contributors](https://img.shields.io/github/contributors/simeononsecurity/Windows-Optimize-Harden-Debloat?label=contributors)](https://github.com/simeononsecurity/Windows-Optimize-Harden-Debloat/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/simeononsecurity/Windows-Optimize-Harden-Debloat)](https://github.com/simeononsecurity/Windows-Optimize-Harden-Debloat/stargazers)
<!-- github-project-badges:end -->

Opinionated automation for Windows 10/11 Pro and Enterprise that changes privacy, security, BitLocker, sign-in, firewall, browser, remote-access, and system policies. Home, N editions, modified ISOs, and combination with other tweak suites are not supported. Read its requirements and suspend BitLocker as directed before use.

### [Windows_Optimisation_Pack](https://github.com/Marvin700/Windows_Optimisation_Pack)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/Marvin700/Windows_Optimisation_Pack?label=last%20release)](https://github.com/Marvin700/Windows_Optimisation_Pack/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/Marvin700/Windows_Optimisation_Pack)](https://github.com/Marvin700/Windows_Optimisation_Pack/commits) [![Contributors](https://img.shields.io/github/contributors/Marvin700/Windows_Optimisation_Pack?label=contributors)](https://github.com/Marvin700/Windows_Optimisation_Pack/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/Marvin700/Windows_Optimisation_Pack)](https://github.com/Marvin700/Windows_Optimisation_Pack/stargazers)
<!-- github-project-badges:end -->

Administrative PowerShell bundle for Windows 10/11 that removes apps and changes telemetry, indexing, scheduled tasks, Windows components, Copilot/AI, OneDrive, and Cortana. It can invoke other tools, including Sophia Script and O&O ShutUp10++. Review a downloaded, pinned version instead of piping the mutable main branch directly into PowerShell.

### [Debloat_Windows11](https://github.com/cramaboule/Debloat_Windows11)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/cramaboule/Debloat_Windows11?label=last%20release)](https://github.com/cramaboule/Debloat_Windows11/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/cramaboule/Debloat_Windows11)](https://github.com/cramaboule/Debloat_Windows11/commits) [![Contributors](https://img.shields.io/github/contributors/cramaboule/Debloat_Windows11?label=contributors)](https://github.com/cramaboule/Debloat_Windows11/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/cramaboule/Debloat_Windows11)](https://github.com/cramaboule/Debloat_Windows11/stargazers)
<!-- github-project-badges:end -->

Opinionated batch script tested by its maintainer on Windows 11 24H2/25H2 Home and Pro. It removes a fixed app list and applies Start, taskbar, power, encryption, and other system changes. There is no built-in rollback; review the script before running it.

### [OneClick](https://github.com/QuakedK/Oneclick) `Potentially destructive`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/QuakedK/Oneclick?label=last%20release)](https://github.com/QuakedK/Oneclick/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/QuakedK/Oneclick)](https://github.com/QuakedK/Oneclick/commits) [![Contributors](https://img.shields.io/github/contributors/QuakedK/Oneclick?label=contributors)](https://github.com/QuakedK/Oneclick/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/QuakedK/Oneclick)](https://github.com/QuakedK/Oneclick/stargazers)
<!-- github-project-badges:end -->

Extreme automated Windows debloat project, not a configurable general-purpose cleaner. Depending on the preset, it can remove Store, Edge, OneDrive, Microsoft account and Xbox support while disabling networking, updates, security, virtualization, printing, and other features. The project acknowledges possible data loss or a required reinstall.

### [Melody for Windows](https://github.com/ionuttbara/melody_windows) `No rollback`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/ionuttbara/melody_windows?label=last%20release)](https://github.com/ionuttbara/melody_windows/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/ionuttbara/melody_windows)](https://github.com/ionuttbara/melody_windows/commits) [![Contributors](https://img.shields.io/github/contributors/ionuttbara/melody_windows?label=contributors)](https://github.com/ionuttbara/melody_windows/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/ionuttbara/melody_windows)](https://github.com/ionuttbara/melody_windows/stargazers)
<!-- github-project-badges:end -->

Noninteractive Windows tweak bundle that immediately applies the author's preferences and reboots. It can disable System Restore, pause Windows Update, and change SmartScreen, VBS, search, logging, services, tasks, and optional features. Test it in a virtual machine or review and select individual source files rather than running the complete bundle.

### [WinMemoryCleaner](https://github.com/IgorMundstein/WinMemoryCleaner)

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/IgorMundstein/WinMemoryCleaner?label=last%20release)](https://github.com/IgorMundstein/WinMemoryCleaner/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/IgorMundstein/WinMemoryCleaner)](https://github.com/IgorMundstein/WinMemoryCleaner/commits) [![Contributors](https://img.shields.io/github/contributors/IgorMundstein/WinMemoryCleaner?label=contributors)](https://github.com/IgorMundstein/WinMemoryCleaner/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/IgorMundstein/WinMemoryCleaner)](https://github.com/IgorMundstein/WinMemoryCleaner/stargazers)
<!-- github-project-badges:end -->

Administrator utility for trimming process working sets and flushing selected Windows caches or standby lists. It is mainly useful for troubleshooting memory pressure or misbehaving applications. Cached memory is not inherently wasted, and purging it can require Windows to load the same data again.

### [NTLite](https://www.ntlite.com/)

Windows image customization tool for integrating updates and drivers, automating setup, and removing components before installation. Component removal can prevent later reinstallation or servicing. The free edition is limited to personal and evaluation use; advanced removal and commercial use require a paid license.

### [Sysinternals Live](https://live.sysinternals.com/)

Microsoft's web and UNC service for running individual Sysinternals utilities without downloading the complete suite. Each utility has different behavior and support: some modify systems, delete data, execute remotely, or deliberately crash Windows for diagnostics. Read the [individual tool documentation](https://learn.microsoft.com/en-us/sysinternals/) first.

### [TronScript](https://github.com/bmrf/tron) `Expert repair use only`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/bmrf/tron?label=last%20release)](https://github.com/bmrf/tron/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/bmrf/tron)](https://github.com/bmrf/tron/commits) [![Contributors](https://img.shields.io/github/contributors/bmrf/tron?label=contributors)](https://github.com/bmrf/tron/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/bmrf/tron)](https://github.com/bmrf/tron/stargazers)
<!-- github-project-badges:end -->

Maintained automation bundle that chains many third-party tools for malware remediation, cleanup, repair, patching, and optimization. It removes software and data, changes services and telemetry settings, and warns that rebooting at the wrong time can leave Windows unbootable. It is not a routine optimizer; use the project's documented package source, make a full backup, and understand every stage before running it.

## Legacy Tools

These links are retained for historical reference. Prefer maintained alternatives for current Windows installations.

### [Windows10Debloater](https://github.com/Sycnex/Windows10Debloater) `Archived`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/Sycnex/Windows10Debloater?label=last%20release)](https://github.com/Sycnex/Windows10Debloater/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/Sycnex/Windows10Debloater)](https://github.com/Sycnex/Windows10Debloater/commits) [![Contributors](https://img.shields.io/github/contributors/Sycnex/Windows10Debloater?label=contributors)](https://github.com/Sycnex/Windows10Debloater/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/Sycnex/Windows10Debloater)](https://github.com/Sycnex/Windows10Debloater/stargazers)
<!-- github-project-badges:end -->

Windows 10 PowerShell debloater archived in 2023. Its broad AppX, registry, and scheduled-task changes target older Windows 10 builds.

### [Debloat Windows 10](https://github.com/W4RH4WK/Debloat-Windows-10) `Deprecated`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/W4RH4WK/Debloat-Windows-10?label=last%20release)](https://github.com/W4RH4WK/Debloat-Windows-10/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/W4RH4WK/Debloat-Windows-10)](https://github.com/W4RH4WK/Debloat-Windows-10/commits) [![Contributors](https://img.shields.io/github/contributors/W4RH4WK/Debloat-Windows-10?label=contributors)](https://github.com/W4RH4WK/Debloat-Windows-10/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/W4RH4WK/Debloat-Windows-10)](https://github.com/W4RH4WK/Debloat-Windows-10/stargazers)
<!-- github-project-badges:end -->

Archived Windows 10 script collection with no undo support. The maintainer explicitly marks it end-of-life and warns that it can break systems and accounts.

### [Win-Debloat-Tools](https://github.com/LeDragoX/Win-Debloat-Tools) `Archived`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/LeDragoX/Win-Debloat-Tools?label=last%20release)](https://github.com/LeDragoX/Win-Debloat-Tools/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/LeDragoX/Win-Debloat-Tools)](https://github.com/LeDragoX/Win-Debloat-Tools/commits) [![Contributors](https://img.shields.io/github/contributors/LeDragoX/Win-Debloat-Tools?label=contributors)](https://github.com/LeDragoX/Win-Debloat-Tools/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/LeDragoX/Win-Debloat-Tools)](https://github.com/LeDragoX/Win-Debloat-Tools/stargazers)
<!-- github-project-badges:end -->

Archived in 2025 after targeting Windows 10/11 through 24H2 on x86/x64 Home and Pro. Removal is not guaranteed reversible, and its maintainer warns not to use it on ARM or ARM64.

### [Bloatbox](https://github.com/builtbybel/bloatbox) `Legacy Windows 10`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/builtbybel/bloatbox?label=last%20release)](https://github.com/builtbybel/bloatbox/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/builtbybel/bloatbox)](https://github.com/builtbybel/bloatbox/commits) [![Contributors](https://img.shields.io/github/contributors/builtbybel/bloatbox?label=contributors)](https://github.com/builtbybel/bloatbox/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/builtbybel/bloatbox)](https://github.com/builtbybel/bloatbox/stargazers)
<!-- github-project-badges:end -->

Older GUI for removing selected UWP and Store apps from Windows 10. Its last release was in 2021 and points users toward newer builtbybel projects.

### [Privatezilla](https://github.com/builtbybel/privatezilla) `Legacy Windows 10`

<!-- github-project-badges:start -->
[![Last release](https://img.shields.io/github/release-date/builtbybel/privatezilla?label=last%20release)](https://github.com/builtbybel/privatezilla/releases/latest) [![Last commit](https://img.shields.io/github/last-commit/builtbybel/privatezilla)](https://github.com/builtbybel/privatezilla/commits) [![Contributors](https://img.shields.io/github/contributors/builtbybel/privatezilla?label=contributors)](https://github.com/builtbybel/privatezilla/graphs/contributors) [![GitHub stars](https://img.shields.io/github/stars/builtbybel/privatezilla)](https://github.com/builtbybel/privatezilla/stargazers)
<!-- github-project-badges:end -->

Privacy settings interface last released in 2022 for older Windows 10 versions. It is not documented for current Windows 11 builds.

### [WPD](https://wpd.app/) `Dormant`

Windows privacy dashboard whose public changelog ends in 2021 and whose network blocking data dates to 2022. Its old endpoint lists and update controls may no longer match current Windows behavior.

## Guides & Documentation

- [WinUtil documentation](https://winutil.christitus.com/) explains its tabs, automation, and tweak behavior.
- [Win11Debloat wiki](https://github.com/Raphire/Win11Debloat/wiki) documents usage, customization, command-line options, and rollback limits.
- [W11-Debloat-Guide](https://github.com/dsient/W11-Debloat-Guide) is an opinionated December 2025 community walkthrough built around WinUtil and manual settings. Treat it as a snapshot and verify every step against current upstream documentation.
- [Panjno on YouTube](https://www.youtube.com/channel/UCXKZHfs9sDLYV9HDuz9MLDA) publishes game, hardware, and Windows tuning videos. Recommendations may be sponsored or hardware-specific; independently verify BIOS, registry, and security-sensitive changes.
- [Microsoft Sysinternals documentation](https://learn.microsoft.com/en-us/sysinternals/) describes each official diagnostic utility and its requirements.

---

**Disclaimer:** Use these tools at your own risk. The repository maintainers are not responsible for data loss, reduced security, licensing issues, unsupported installations, or system instability. Back up your data and confirm that you can reinstall Windows before making high-impact changes.
