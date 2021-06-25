<template>
  <div>
    <v-card to="detail">
      <v-img
        src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg"
        gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
        :aspect-ratio="16 / 9"
        height="500px"
        dark
      >
        <v-card-text class="fill-height d-flex align-end">
          <v-row class="flex-column">
            <v-col>
              <v-btn color="accent" to="category">Travel</v-btn>
            </v-col>
            <v-col cols="12" md="10" lg="8" xl="7">
              <h2 class="text-h3 py-3" style="line-height: 1.2">
                Great Travel Blogs From Around The World To Inspire You
              </h2>
            </v-col>
            <v-col class="d-flex align-center">
              <v-avatar class="elevation-4" color="accent">
                <v-icon large>mdi-feather</v-icon>
              </v-avatar>

              <div class="text-h6 pl-2">Yan Lee · 22 July 2019</div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-img>
    </v-card>
  </div>
</template>
