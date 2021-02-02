# color-entity-row

This is a repo with Home Assistant custom ui card `color-entity-row`.

This card is used inside `entities`. It shows `input_text` value as a color and make it possible to change the value.

![](https://upload.bessarabov.ru/bessarabov/HWlThtvzCV2UZ90wukuRLb7akfw.png)

## Installation

There are several ways, you can add this card to your Home Assistant.

### Manual installation

 * Copy file `color-entity-row.js` to `/config/www/color-entity-row.js`
 * Check that you can see this file as http://hassio.local:8123/local/color-entity-row.js (restart HA if you can't)
 * Add `/local/color-entity-row.js` as `JavaScript Module` in HA config http://hassio.local:8123/config/lovelace/resources

### Installation with HACS

If you use HACS, you can install this card with HACS (but HACS is not required,
if you don't use HACS you can install this card using the steps described in the previous section)

To install this card with HACS just use the standart HACS way to install
cards from the custom GitHub repository.

## Configuration

When you have this card installed in your Home Assistant you can use it. Add to your
lovelace ui:

```yaml
      - type: custom:color-entity-row
        entity: input_text.c1
        name: Text 1
        icon: mdi:text-box
```

The field `entity` is required, `name` and `icon` are optional.

This card can work only with entities that are in domain `input_text`.

This card must be part of `entities` card. Here a full example:

```yaml
title: Home
views:
  - path: default_view
    title: Home
    badges: null
    cards:
      - type: entities
        entities:
          - input_text.c1
          - input_text.c2

          - type: custom:color-entity-row
            entity: input_text.c1
            name: Text 1
            icon: mdi:text-box

          - type: custom:color-entity-row
            entity: input_text.c1
            name: Text 2
            icon: mdi:text-box-outline

          - type: custom:color-entity-row
            entity: input_text.c2
```
