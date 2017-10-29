<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet-draw'

import eventsBinder from './utils/eventsBinder.js'
import propsBinder from './utils/propsBinder.js'

const events = [
  L.Draw.Event.CREATED,
  L.Draw.Event.EDITED,
  L.Draw.Event.DELETED,
  L.Draw.Event.DRAWSTART,
  L.Draw.Event.DRAWSTOP,
  L.Draw.Event.DRAWVERTEX,
  L.Draw.Event.EDITSTART,
  L.Draw.Event.EDITMOVE,
  L.Draw.Event.EDITRESIZE,
  L.Draw.Event.EDITVERTEX,
  L.Draw.Event.EDITSTOP,
  L.Draw.Event.DELETESTART,
  L.Draw.Event.DELETESTOP,
  L.Draw.Event.TOOLBAROPENED,
  L.Draw.Event.TOOLBARCLOSED
];

const props = {
  options: {
    type: Object,
    default: function() {
      return {};
    }
  },
  featureGroup: {
    type: Object,
    custom: true,
    default: null
  }
}

export default {
  props: props,
  watch: {
    options: function() {
      this._remove()
      this._add()
    }
  },
  mounted () {
    this._add();
  },

  beforeDestroy () {
    this._remove()
  },
  methods: {
    deferredMountedTo (parent) {
      //this.parent = parent
      //var that = this.mapObject
      //for (var i = 0; i < this.$children.length; i++) {
      //  this.$children[i].deferredMountedTo(that)
      //}
      //if (this.visible) {
      //  this.mapObject.addControl(parent)
      //}
    },
    _remove () {
      //this.parent.removeLayer(this.mapObject)
    },
    _add () {
      //this.mapObject = L.Control.Draw(this.options)
      //if (this.$parent._isMounted) {
      //  this.deferredMountedTo(this.$parent.mapObject)
      //}
      //eventsBinder(this, this.mapObject, events)
      //propsBinder(this, this.mapObject, props)
    },
    setFeatureGroup(val) {
      //this._remove();

      //if (!('edit' in this.options)) {
      //  this.options.edit = val
      //}

      //this.options.edit.featureGroup = val;
      //this._add();
    }
  }
}
</script>
