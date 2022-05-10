import fs from "fs";
import path from "path";
import yaml from "yaml";
import { Show } from "../classes/show";
import { Events } from "../types/events";
import { Month } from "../types/month";
import { Year } from "../types/year";

export default function getShows(): Show[] {
  const events = yaml.parse(fs.readFileSync(path.join(process.cwd(), "/public/shows.yaml"), "utf-8")).events as Events;

  const shows: Show[] = [];
  events.years.forEach((year: Year): void => {
    return year.months.forEach((month: Month): void => {
      return month.shows.forEach((show: Show): void => {
        shows.push(show);
      });
    });
  });

  return shows;
}
