# VRM Pose App

![screenshot](screenshot.jpg)

Webカメラを使ってトラッキングしてVRMモデルを動かせるアプリです。

Electronで
[mediapipe-vrm-pose](https://github.com/masabando/mediapipe-vrm-pose)
プロジェクトの
[デモページ](https://masabando.github.io/mediapipe-vrm-pose/)
を表示しています。

## ダウンロード
* [Windows x64 (to be released)]()
* [Mac (Apple Silicon)]()

## 使い方

基本的な使い方は
[mediapipe-vrm-pose](https://github.com/masabando/mediapipe-vrm-pose)
のREADMEを参照してください。

デフォルトで背景は透過しています。

### 移動
透明部分を含めてウィンドウをドラッグできます。  
800x800pxのウィンドウサイズになっています。

### UIを非表示にする
QキーでUIを非表示にできます。  
アプリにフォーカスがあるときのみ有効なので、ご注意ください。

### マウスイベントを透過させる
SPACEキーでマウスイベントを透過させることができます。

マウスイベントを透過すると、
ボタンやスライダーなどのUI操作ができなくなり、
移動もできなくなります。

アプリ自体にフォーカスするにはタスクバーなどからアプリを選択してください。
