/****
 *    Copyright 2019 David L. Day
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import { OutputChannel, window } from "vscode";

// General Extension
export const EXTENSION_TIMEOUT_MS = 500;
export const EXTENSION_OUTPUT_CHANNEL: OutputChannel =
  window.createOutputChannel("LanguageTool Linter");
export const EXTENSION_DISPLAY_NAME = "languagetool-linter";
export const EXTENSION_DIAGNOSTIC_SOURCE = "LanguageTool";

// Programming Language IDs
export const LANGUAGE_ID_HTML = "html";
export const LANGUAGE_ID_MARKDOWN = "markdown";
export const LANGUAGE_ID_MDX = "mdx";

export const SUPPORTED_LANGUAGE_IDS: string[] = [
  LANGUAGE_ID_HTML,
  LANGUAGE_ID_MARKDOWN,
  LANGUAGE_ID_MDX,
];

// File Scheme
export const SCHEME_FILE = "file";
export const SCHEME_UNTITLED = "untitled";

// Configuration Strings
export const CONFIGURATION_ROOT = "languageToolLinter";
export const CONFIGURATION_GLOBAL_IGNORED_WORDS =
  "languageTool.ignoredWordsGlobal";
export const CONFIGURATION_WORKSPACE_IGNORED_WORDS =
  "languageTool.ignoredWordsInWorkspace";
export const CONFIGURATION_IGNORED_WORD_HINT = "languageTool.ignoredWordHint";
export const CONFIGURATION_DISABLED_RULES = "languageTool.disabledRules";
export const CONFIGURATION_DISABLED_CATEGORIES =
  "languageTool.disabledCategories";
export const CONFIGURATION_PLAIN_TEXT_ENABLED = "plainText.enabled";
export const CONFIGURATION_PLAIN_TEXT_IDS = "plainText.languageIds";
export const CONFIGURATION_DISABLED_IDS = "disabledLanguageIds";
export const CONFIGURATION_LANGUAGE = "language";

// LanguageTool Services
export const SERVICE_PUBLIC_URL = "https://languagetool.org/api";
export const SERVICE_CHECK_PATH = "/v2/check";
export const SERVICE_TYPE_EXTERNAL = "external";
export const SERVICE_TYPE_MANAGED = "managed";
export const SERVICE_TYPE_PUBLIC = "public";
export const SERVICE_TYPES: string[] = [
  SERVICE_TYPE_EXTERNAL,
  SERVICE_TYPE_MANAGED,
  SERVICE_TYPE_PUBLIC,
];
export const SERVICE_PARAMETERS: string[] = [
  "language",
  "motherTongue",
  "preferredVariants",
  "disabledCategories",
  "disabledRules",
  "level",
];
export const SERVICE_RULE_BASE_URI =
  "https://community.languagetool.org/rule/show/";
export const SERVICE_RULE_URL_LANG_DEFAULT = "en";
export const SERVICE_RULE_URL_GENERIC_LABEL = "details";

// Extension Commands
export const COMMAND_CHECK_DOCUMENT = "languagetoolLinter.checkDocument";
export const COMMAND_CHECK_DOCUMENT_AS_PLAINTEXT =
  "languagetoolLinter.checkDocumentAsPlainText";
export const COMMAND_CLEAR_DIAGNOSTICS =
  "languagetoolLinter.clearDocumentDiagnostics";
export const COMMAND_SMART_FORMAT = "languagetoolLinter.smartFormatDocument";
export const COMMAND_IGNORE_USR_WORD = "languagetoolLinter.ignoreWordGlobally";
export const COMMAND_IGNORE_WS_WORD =
  "languagetoolLinter.ignoreWordInWorkspace";
export const COMMAND_REMOVE_USR_IGNORED_WORD =
  "languagetoolLinter.removeGloballyIgnoredWord";
export const COMMAND_REMOVE_WS_IGNORED_WORD =
  "languagetoolLinter.removeWorkspaceIgnoredWord";
export const COMMAND_DISABLE_RULE = "languagetoolLinter.disableRule";
export const COMMAND_DISABLE_CATEGORY = "languagetoolLinter.disableCategory";
export const COMMAND_TOGGLE_LINTING = "languagetoolLinter.toggleSuspendLinting";
export const COMMAND_STRINGS = [
  COMMAND_CHECK_DOCUMENT,
  COMMAND_CHECK_DOCUMENT_AS_PLAINTEXT,
  COMMAND_CLEAR_DIAGNOSTICS,
  COMMAND_SMART_FORMAT,
  COMMAND_IGNORE_USR_WORD,
  COMMAND_IGNORE_WS_WORD,
  COMMAND_REMOVE_USR_IGNORED_WORD,
  COMMAND_REMOVE_WS_IGNORED_WORD,
  COMMAND_DISABLE_RULE,
  COMMAND_DISABLE_CATEGORY,
  COMMAND_TOGGLE_LINTING,
];
