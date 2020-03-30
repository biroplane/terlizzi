<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title>Add News</v-card-title>
          <v-card-text>
            <v-text-field v-model="title" name="title"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="addTitle" color="primary">Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../data/firebase";
export default {
  data: () => ({
    title: ""
  }),
  methods: {
    addTitle() {
      //console.log("database ", db);
      //console.log("Aggiungo il titolo ->", this.title);
    }
  }
};
</script>

<style></style>
