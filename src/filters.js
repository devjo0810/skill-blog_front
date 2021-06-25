import Vue from "vue";
import * as date from "@/utils/date";

Vue.filter("fullDate", value => {
  return date.getDate(value, "yyyy.MM.dd hh:mm:ss");
});
