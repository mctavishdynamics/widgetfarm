import {
  DatePicker as BaseDatePicker,
  type DatePickerRootProps,
  Portal,
} from "@ark-ui/react";
import { IconCalendar, IconX } from "@tabler/icons-react";
import { clsx } from "clsx";
import type { Ref } from "react";
import { Button } from "../Button/Button.tsx";
import { TextInput } from "../TextInput/TextInput.tsx";
import styles from "./DatePicker.module.css";

export interface DatePickerProps extends DatePickerRootProps {
  label?: string;
  iso8601?: boolean;
  error?: string;

  ref?: Ref<HTMLInputElement>;

  isDirty?: boolean;
  isInvalid?: boolean;
  isTouched?: boolean;
}

export function DatePicker(props: DatePickerProps) {
  const { label = "", iso8601 = false, error, ...rest } = props;

  const iso6801Props: Pick<DatePickerProps, "placeholder" | "format"> = {
    placeholder: "yyyy-mm-dd",
    format: (date) => {
      return [
        `${date.year}`.padStart(4, "0"),
        `${date.month}`.padStart(2, "0"),
        `${date.day}`.padStart(2, "0"),
      ].join("-");
    },
  };

  return (
    <BaseDatePicker.Root
      {...rest}
      className={clsx(styles.DatePicker, { [styles.Error]: error })}
      {...(iso8601 ? iso6801Props : {})}
    >
      <BaseDatePicker.Label>{label}</BaseDatePicker.Label>
      <BaseDatePicker.Control>
        <BaseDatePicker.Input asChild>
          <TextInput />
        </BaseDatePicker.Input>
        <BaseDatePicker.Trigger asChild>
          <Button>
            <IconCalendar />
          </Button>
        </BaseDatePicker.Trigger>
        <BaseDatePicker.ClearTrigger asChild>
          <Button>
            <IconX />
          </Button>
        </BaseDatePicker.ClearTrigger>
      </BaseDatePicker.Control>
      {error ? (
        <div data-scope={"date-picker"} data-part={"error"}>
          {error}
        </div>
      ) : null}
      <Portal>
        <BaseDatePicker.Positioner>
          <BaseDatePicker.Content>
            <div className={styles.Header}>
              <BaseDatePicker.YearSelect />
              <BaseDatePicker.MonthSelect />
            </div>

            <BaseDatePicker.View view="day">
              <BaseDatePicker.Context>
                {(datePicker) => (
                  <>
                    <BaseDatePicker.ViewControl>
                      <BaseDatePicker.PrevTrigger asChild>
                        <Button>Prev</Button>
                      </BaseDatePicker.PrevTrigger>
                      <BaseDatePicker.ViewTrigger asChild>
                        <Button>
                          <BaseDatePicker.RangeText />
                        </Button>
                      </BaseDatePicker.ViewTrigger>
                      <BaseDatePicker.NextTrigger asChild>
                        <Button>Next</Button>
                      </BaseDatePicker.NextTrigger>
                    </BaseDatePicker.ViewControl>
                    <BaseDatePicker.Table>
                      <BaseDatePicker.TableHead>
                        <BaseDatePicker.TableRow>
                          {datePicker.weekDays.map((weekDay, id) => (
                            <BaseDatePicker.TableHeader key={id}>
                              {weekDay.short}
                            </BaseDatePicker.TableHeader>
                          ))}
                        </BaseDatePicker.TableRow>
                      </BaseDatePicker.TableHead>
                      <BaseDatePicker.TableBody>
                        {datePicker.weeks.map((week, id) => (
                          <BaseDatePicker.TableRow key={id}>
                            {week.map((day, id) => (
                              <BaseDatePicker.TableCell key={id} value={day}>
                                <BaseDatePicker.TableCellTrigger>
                                  {day.day}
                                </BaseDatePicker.TableCellTrigger>
                              </BaseDatePicker.TableCell>
                            ))}
                          </BaseDatePicker.TableRow>
                        ))}
                      </BaseDatePicker.TableBody>
                    </BaseDatePicker.Table>
                  </>
                )}
              </BaseDatePicker.Context>
            </BaseDatePicker.View>
            <BaseDatePicker.View view="month">
              <BaseDatePicker.Context>
                {(datePicker) => (
                  <>
                    <BaseDatePicker.ViewControl>
                      <BaseDatePicker.PrevTrigger asChild>
                        <Button>Prev</Button>
                      </BaseDatePicker.PrevTrigger>
                      <BaseDatePicker.ViewTrigger asChild>
                        <Button>
                          <BaseDatePicker.RangeText />
                        </Button>
                      </BaseDatePicker.ViewTrigger>
                      <BaseDatePicker.NextTrigger asChild>
                        <Button>Next</Button>
                      </BaseDatePicker.NextTrigger>
                    </BaseDatePicker.ViewControl>
                    <BaseDatePicker.Table>
                      <BaseDatePicker.TableBody>
                        {datePicker
                          .getMonthsGrid({ columns: 4, format: "short" })
                          .map((months, id) => (
                            <BaseDatePicker.TableRow key={id}>
                              {months.map((month, id) => (
                                <BaseDatePicker.TableCell
                                  key={id}
                                  value={month.value}
                                >
                                  <BaseDatePicker.TableCellTrigger>
                                    {month.label}
                                  </BaseDatePicker.TableCellTrigger>
                                </BaseDatePicker.TableCell>
                              ))}
                            </BaseDatePicker.TableRow>
                          ))}
                      </BaseDatePicker.TableBody>
                    </BaseDatePicker.Table>
                  </>
                )}
              </BaseDatePicker.Context>
            </BaseDatePicker.View>
            <BaseDatePicker.View view="year">
              <BaseDatePicker.Context>
                {(datePicker) => (
                  <>
                    <BaseDatePicker.ViewControl>
                      <BaseDatePicker.PrevTrigger asChild>
                        <Button>Prev</Button>
                      </BaseDatePicker.PrevTrigger>
                      <BaseDatePicker.ViewTrigger asChild>
                        <Button>
                          <BaseDatePicker.RangeText />
                        </Button>
                      </BaseDatePicker.ViewTrigger>
                      <BaseDatePicker.NextTrigger asChild>
                        <Button>Next</Button>
                      </BaseDatePicker.NextTrigger>
                    </BaseDatePicker.ViewControl>
                    <BaseDatePicker.Table>
                      <BaseDatePicker.TableBody>
                        {datePicker
                          .getYearsGrid({ columns: 4 })
                          .map((years, id) => (
                            <BaseDatePicker.TableRow key={id}>
                              {years.map((year, id) => (
                                <BaseDatePicker.TableCell
                                  key={id}
                                  value={year.value}
                                >
                                  <BaseDatePicker.TableCellTrigger>
                                    {year.label}
                                  </BaseDatePicker.TableCellTrigger>
                                </BaseDatePicker.TableCell>
                              ))}
                            </BaseDatePicker.TableRow>
                          ))}
                      </BaseDatePicker.TableBody>
                    </BaseDatePicker.Table>
                  </>
                )}
              </BaseDatePicker.Context>
            </BaseDatePicker.View>
          </BaseDatePicker.Content>
        </BaseDatePicker.Positioner>
      </Portal>
    </BaseDatePicker.Root>
  );
}
