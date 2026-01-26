<template>
  <dashboard :ExperimentCourse11="ExperimentCourse11" />
</template>

<script>
import Vue from 'vue'
import ExperimentCourse11 from '@ExperimentCourse11/core'
import { Dashboard } from '@ExperimentCourse11/vue'

export default {
  name: 'App',
  components: {
    Dashboard,
  },
  computed: {
    ExperimentCourse11: () => new ExperimentCourse11(),
  },
}
</script>

<style src="@ExperimentCourse11/core/dist/style.css"></style>
<style src="@ExperimentCourse11/dashboard/dist/style.css"></style>
