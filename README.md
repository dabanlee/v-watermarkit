# Watermarkit

Watermarkit directive for Vue2/3.

## Get Started

```sh
$ yarn add v-watermarkit
```

**use globally**

```js
import { createApp } from 'vue'
import Watermark from 'v-watermarkit'

const app = createApp({/* ... */})

app.use(Watermark)
```

**use in component**

```html
<script setup>
import { vWatermarkit } from 'v-watermarkit'
</script>
```

## Usage

```html
<template>
  <div v-watermarkit="text"></div>
  <!-- or -->
  <div
    v-watermarkit="{
      text,
      color: `#aaa`,
      fontSize: 16,
      zIndex: 999,
      opacity: .3,
      rotate: 30,
      gap: 80,
    }"
  ></div>
</template>
<script setup>
import { ref } from 'vue'
import { vWatermarkit } from 'v-watermarkit'

const text = ref(`大板栗 banli.co`)
</script>
```

## ScreenShot

![ScreenShot](./watermarkit.png)

## Api

|props | type | default |
| --- | --- | --- |
| `text` | `string` | `''` |
| `color` | `string` | `#999` |
| `fontSize` | `number` | `12` |
| `zIndex` | `number` | `9999` |
| `opacity` | `number` | `.1` |
| `rotate` | `number` | `15` |
| `gap` | `number` | `50` |

## License

Licensed under the [MIT License](https://github.com/dabanlee/v-watermarkit/blob/master/LICENSE)