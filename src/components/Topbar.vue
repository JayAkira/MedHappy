<template>
  <v-app-bar
    app
    color="primary"
    class="white--text"
    v-if="
      $route.name != 'Login' &&
      $route.name != 'Register' &&
      $route.name != 'Landing'
    "
  >
    <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
          <v-btn
            v-if="$route.name == 'Medicine'"
            fab
            large
            color="primary"
            fixed
            right
            top
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Medicine Info</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="title" label="Title"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="description"
                  label="Description"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  v-model="frequency"
                  :items="['Daily', 'Every other day', 'Weekly', 'Bi-weekly']"
                  label="Frequency"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-menu
                  ref="menu"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="time"
                      label="Picker in menu"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="menu2"
                    v-model="time"
                    full-width
                    @click:minute="$refs.menu.save(time)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="doseAmount"
                  label="Ex: 100"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col col="6">
                <v-autocomplete
                  v-model="doseType"
                  cols="6"
                  :items="['mg', 'ml']"
                  label="mg/ml"
                >
                </v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
          <v-btn color="primary" text @click="handleSave"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    title: null,
    description: null,
    frequency: null,
    time: null,
    doseAmount: null,
    doseType: null,
    menu2: false,
    modal2: false,
  }),
  methods: {
    handleSave() {
      const data = {
        title: this.title,
        description: this.description,
        frequency: this.frequency,
        time: this.time,
        doseAmount: this.doseAmount,
        doseType: this.doseType,
      };
      this.$store.addItem(data);
      this.dialog = false;
    },
  },
};
// TODO: reset dialog fields on submit
</script>
