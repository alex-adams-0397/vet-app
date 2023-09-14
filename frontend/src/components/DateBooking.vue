<template>
  <div class="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
    <h1>Hier haben Sie die Möglichkeit einen Termin zu buchen.</h1>
    <p>Tier</p>
    <p>Name</p>
    <VueDatePicker
      v-model="date"
      :markers="markers"
      locale="de"
      cancelText="Abbrechen"
      selectText="Auswählen"
      placeholder="Bitte Termin auswählen"
      minutes-increment="20"
      time-picker-inline
      :min-date="new Date()"
      :disabled-dates="disabledDates"
      inline auto-apply
    >
      <template #marker="{ marker, day, date }">
        <span class="custom-marker"></span>
      </template>
    </VueDatePicker>
    <p>Ihr Termin ist am: {{ trackedValue }}</p>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import addDays from "date-fns/addDays";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const date = ref();

const disabledDates = computed(() => {
  return [
    new Date(new Date().setDate(new Date().getDate() + 1)),
    new Date(new Date().setDate(new Date().getDate() + 2)),
    new Date(new Date().setDate(new Date().getDate() + 3)),
  ];
});

const trackedValue = ref("");

watch(date, (newValue) => {
  console.log("Neuer Wert:", newValue);
  trackedValue.value = newValue;
});

const markers = ref([
  {
    date: addDays(new Date(), 1),
    type: "dot",
    tooltip: [{ text: "Keine Termine Verfügbar", color: "red" }],
  },
  {
    date: addDays(new Date(), 2),
    type: "line",
    tooltip: [{ text: "Keine Termine Verfügbar", color: "red" }],
  },
  {
    date: addDays(new Date(), 3),
    type: "dot",
    tooltip: [{ text: "Keine Termine Verfügbar", color: "red" }],
  },
]);
</script>

<style>
/*
.custom-marker {
  position: absolute;
  top: 0;
  right: 0;
  height: 8px;
  width: 8px;
  border-radius: 100%;
  background-color: green;

  https://vue3datepicker.com/props/time-picker-configuration/
}*/
</style>   


