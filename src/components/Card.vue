<template>
  <v-card class="d-flex flex-no-wrap justify-space-between my-1">
    <div>
      <v-card-title class="text-h6" v-text="data.title"></v-card-title>

      <v-card-subtitle v-text="data.description"></v-card-subtitle>
    </div>
    <v-card-actions>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-if="$route.name == 'Medicine'" v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Medicine Info</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="data.title"
                    label="Title"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="data.description"
                    label="Description"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-autocomplete
                    v-model="data.frequency"
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
                        v-model="data.time"
                        label="Hour"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="menu2"
                      v-model="data.time"
                      full-width
                      ampm-in-title
                      @click:minute="$refs.menu.save(time)"
                    ></v-time-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="data.doseAmount"
                    label="Ex: 100"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="data.doseType"
                    cols="6"
                    :items="['mg', 'ml']"
                    label="mg/ml"
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="12"
                  ><v-btn color="error" @click="deleteItem">
                    Delete Reminder
                  </v-btn></v-col
                >
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="normal" @click="dialog = false"> Close </v-btn>
            <v-btn color="primary" @click="handleSave"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- <v-btn text v-if="$route.name == 'Medicine'">
				<v-icon large>mdi-dots-vertical</v-icon></v-btn
			> -->
      <v-btn
        text
        :disabled="data.isCheckDisabled"
        v-if="$route.name == 'Home'"
        @click="toggleCloseState(data.isCheckDisabled)"
      >
        <v-icon color="green" large>mdi-check-circle</v-icon></v-btn
      >
      <v-btn
        text
        :disabled="data.isCloseDisabled"
        v-if="$route.name == 'Home'"
        @click="toggleCheckState(data.isCloseDisabled)"
      >
        <v-icon color="red" large>mdi-close-circle</v-icon></v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["data"],
  data: () => ({
    time: null,
    menu2: false,
    dialog: false,
  }),
  methods: {
    toggleCloseState(isToggled) {
      const elementsIndex = this.$store.items.findIndex(
        (element) => element.title == this.data.title
      );

      let newArray = [...this.$store.items];

      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        isCloseDisabled: !isToggled,
      };

      this.$store.items = newArray;
    },
    toggleCheckState(isToggled) {
      const elementsIndex = this.$store.items.findIndex(
        (element) => element.title == this.data.title
      );

      let newArray = [...this.$store.items];

      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        isCheckDisabled: !isToggled,
      };

      this.$store.items = newArray;
    },
    handleSave() {
      const data = {
        title: this.title,
        description: this.description,
        frequency: this.frequency,
        time: this.time,
        doseAmount: this.doseAmount,
        doseType: this.doseType,
      };
      this.$store.updateItem(data);
      this.dialog = false;
    },
    deleteItem() {
      this.$store.deleteItem(this.data.title);
      this.dialog = false;
    },
  },
};
</script>
