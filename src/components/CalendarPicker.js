import moment from "moment";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Colors } from "~/theme";
import Typography from "./Typography";

LocaleConfig.locales.en = LocaleConfig.locales[""];
LocaleConfig.locales.fr = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = "fr";

moment.updateLocale("fr", {
  months: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  weekdays: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  weekdaysShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  weekdaysMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY LT",
    LLLL: "dddd D MMMM YYYY LT",
  },
  calendar: {
    sameDay: "[Aujourd'hui à] LT",
    nextDay: "[Demain à] LT",
    nextWeek: "dddd [à] LT",
    lastDay: "[Hier à] LT",
    lastWeek: "dddd [dernier à] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "dans %s",
    past: "il y a %s",
    s: "quelques secondes",
    m: "une minute",
    mm: "%d minutes",
    h: "une heure",
    hh: "%d heures",
    d: "un jour",
    dd: "%d jours",
    M: "un mois",
    MM: "%d mois",
    y: "une année",
    yy: "%d années",
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
  ordinal: function (number) {
    return number + (number === 1 ? "er" : "e");
  },
  meridiemParse: /PD|MD/,
  isPM: function (input) {
    return input.charAt(0) === "M";
  },
});

/**
 * @typedef {{
 *  startDate: string,
 *  endDate: string,
 * }} SelectedDate
 *
 * @param {{
 *  initialDates: SelectedDate,
 *  onDateSelectChange: (selectedDate: SelectedDate) => null
 *  onUpdateCompleted: (selectedDate: SelectedDate) => null
 * }} param0
 */
const CalendarPicker = ({
  initialDates,
  onDateSelectChange = (a) => {},
  onUpdateCompleted = () => {},
}) => {
  const formatDate = (dateString) => {
    const momentDate = moment(dateString).isValid()
      ? moment(dateString)
      : moment();
    return momentDate.format("MMMM yyyy");
  };

  const [calendarHeader, setCalendarHeader] = useState(
    formatDate(initialDates?.startDate)
  );
  const [selectedDate, setSelectedDate] = useState({
    startDate: initialDates?.startDate ?? "",
    endDate: initialDates?.endDate ?? "",
  });

  useEffect(() => {
    onDateSelectChange(selectedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  const handleDayPress = (date) => {
    if (
      selectedDate.startDate &&
      !selectedDate.endDate &&
      moment(date.dateString).isAfter(moment(selectedDate.startDate))
    ) {
      // NOTE: On 2nd press = select end date
      //* Cannot have end date before start date
      const updatedDates = { ...selectedDate, endDate: date.dateString };
      onUpdateCompleted(updatedDates);
      setSelectedDate(updatedDates);
    } else {
      // NOTE: On 1st or 3rd press = select start date
      setSelectedDate({
        startDate: date.dateString,
        endDate: "",
      });
    }
  };

  const markedDays = useMemo(() => {
    let marked = {};
    if (selectedDate.startDate) {
      marked = {
        ...marked,
        [selectedDate.startDate]: { startDay: true },
      };
    }
    if (selectedDate.startDate) {
      marked = {
        ...marked,
        [selectedDate.endDate]: {
          ...(marked[selectedDate.endDate] ?? {}),
          endDay: true,
        },
      };
    }

    let currMiddleDay = moment(selectedDate.startDate).add(1, "days");
    while (moment(currMiddleDay).isBefore(moment(selectedDate.endDate))) {
      marked = {
        ...marked,
        [currMiddleDay.format("YYYY-MM-DD")]: {
          middleDay: true,
        },
      };
      currMiddleDay = currMiddleDay.add(1, "days");
    }

    return marked;
  }, [selectedDate]);

  const renderHeader = useCallback(
    (date) => {
      return (
        <View>
          <Typography typographyStyle={{ fontSize: 16 }}>
            {calendarHeader || formatDate(date)}
          </Typography>
        </View>
      );
    },
    [calendarHeader]
  );

  const onMonthChange = useCallback((date) => {
    setCalendarHeader(formatDate(date.dateString));
  }, []);

  const renderArrow = useCallback((direction) => {
    if (direction === "left") {
      return <View style={styles.leftArrow} />;
    }
    if (direction === "right") {
      return <View style={styles.rightArrow} />;
    }
  }, []);

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        current={initialDates?.startDate}
        minDate={moment().format("YYYY-MM-DD")}
        onDayPress={handleDayPress}
        markingType="period"
        markedDates={markedDays}
        firstDay={1}
        renderHeader={renderHeader}
        onMonthChange={onMonthChange}
        dayComponent={DayComponent}
        renderArrow={renderArrow}
        locale="fr"
      />
    </View>
  );
};

const DayComponent = memo(({ children, date, marking, onPress, state }) => {
  const isStartOrEndOfMarkedDay = marking?.startDay || marking?.endDay;
  const isStartAndEndOnSameDay = marking?.startDay && marking?.endDay;
  const isRangedStartDay = !isStartAndEndOnSameDay && marking?.startDay;
  const isRangedEndDay = !isStartAndEndOnSameDay && marking?.endDay;
  const isRangedMarkedDay =
    !isStartAndEndOnSameDay &&
    (marking?.startDay || marking?.endDay || marking?.middleDay);

  return (
    <TouchableOpacity onPress={() => onPress(date)}>
      <View
        style={[
          styles.dayContainer,
          date.dateString === moment().format("YYYY-MM-DD") && styles.today,
          isStartOrEndOfMarkedDay && styles.markedStartEnd,
        ]}
      >
        <View
          style={[
            styles.dayBackgroundExtension,
            isRangedStartDay && styles.dayBackgroundExtensionStart,
            isRangedEndDay && styles.dayBackgroundExtensionEnd,
            isRangedMarkedDay && styles.dayBackgroundExtensionMarked,
          ]}
        />
        <Typography
          typographyStyle={[state === "disabled" && styles.disabledDay]}
        >
          {children}
        </Typography>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  calendar: {
    //* NOTE: Currently the calendar doesn't support dynamic width, because it will caused some spacing issue.
    //* TO ENHANCE: Calculate the empty space to fill in with (screen width - screen padding - (40 * 7) = leftover spacing)?
    width: 325,
    borderRadius: 8,
  },

  // ---- DAY COMPONENT -------------
  dayContainer: {
    height: 40,
    width: 40,
    marginVertical: -7,
    justifyContent: "center",
    alignItems: "center",
  },

  dayBackgroundExtension: {
    position: "absolute",
    height: 40,
    width: 45,
    marginHorizontal: -10,
  },

  dayBackgroundExtensionMarked: {
    backgroundColor: `${Colors.primary_color}55`,
  },

  dayBackgroundExtensionStart: {
    width: 35,
    right: 7.5,
  },

  dayBackgroundExtensionEnd: {
    width: 35,
    left: 7.5,
  },

  markedStartEnd: {
    backgroundColor: Colors.primary_color,
    borderRadius: 8,
  },

  disabledDay: {
    color: Colors.main_grey,
  },

  today: {
    backgroundColor: Colors.primary_color,
    borderRadius: 8,
  },

  leftArrow: {
    height: 0,
    width: 0,
    backgroundColor: "transparent",
    borderTopWidth: 8,
    borderTopColor: "transparent",
    borderBottomWidth: 8,
    borderBottomColor: "transparent",
    borderRightColor: Colors.primary_color,
    borderRightWidth: 10,
    marginLeft: 10,
  },

  rightArrow: {
    height: 0,
    width: 0,
    backgroundColor: "transparent",
    borderTopWidth: 8,
    borderTopColor: "transparent",
    borderBottomWidth: 8,
    borderBottomColor: "transparent",
    borderLeftColor: Colors.primary_color,
    borderLeftWidth: 10,
    marginRight: 10,
  },
});

export default CalendarPicker;
