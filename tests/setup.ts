/**
 * @file setup.ts
 * @description Global test setup file that initializes happy-dom environment for all tests.
 * @description すべてのテスト用の happy-dom 環境を初期化するグローバルテストセットアップファイル。
 * @author Virginia Zhang
 * @remarks This file must be imported before any test files to ensure DOM APIs are available globally.
 * @remarks DOM API がグローバルで利用可能であることを保証するため、このファイルはすべてのテストファイルの前にインポートされる必要があります。
 */

import { GlobalRegistrator } from "@happy-dom/global-registrator";

// Register happy-dom globals before any tests run
// すべてのテスト実行前に happy-dom のグローバルを登録
GlobalRegistrator.register();
