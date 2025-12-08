import {
  DatePicker as BaseDatePicker,
  Portal,
  type DatePickerRootProps,
} from "@ark-ui/react";
import { clsx } from "clsx";
import { useId, type JSX, type Ref } from "react";
import { TbCalendar, TbX } from "react-icons/tb";
import { Button } from "../Button/Button";
import { TextInput } from "../TextInput/TextInput";
import { useDatePickerContext } from "./useDatePickerContext";

export type DatePickerLabelRenderer = (args: {
  label?: string | JSX.Element;
  isDirty: boolean;
  isInvalid: boolean;
  isTouched: boolean;
}) => string | JSX.Element;

export type DatePickerError = string | JSX.Element;

export interface DatePickerProps extends DatePickerRootProps {
  id?: string;
  name?: string;

  label?: string | JSX.Element;
  labelRenderer?: DatePickerLabelRenderer;

  iso8601?: boolean;
  error?: DatePickerError;

  ref?: Ref<HTMLInputElement>;

  isDirty?: boolean;
  isInvalid?: boolean;
  isTouched?: boolean;
}

const DATA_SCOPE = "date-picker";

export function DatePicker(props: DatePickerProps) {
  const {
    id,
    name,
    className,
    label = "",
    iso8601 = false,
    error,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isDirty,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isInvalid,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isTouched,

    ...rest
  } = props;

  const context = useDatePickerContext();
  const usedId = useId();

  const _id = id || usedId;
  const _name = name || _id;

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
      className={clsx(context.className, className)}
      {...(iso8601 ? iso6801Props : {})}
    >
      <BaseDatePicker.Label htmlFor={_id}>{label}</BaseDatePicker.Label>
      <BaseDatePicker.Control>
        <BaseDatePicker.Input asChild>
          <TextInput id={_id} name={_name} error={!!error} />
        </BaseDatePicker.Input>
        <BaseDatePicker.Trigger asChild>
          <Button>
            <TbCalendar />
          </Button>
        </BaseDatePicker.Trigger>
        <BaseDatePicker.ClearTrigger asChild>
          <Button>
            <TbX />
          </Button>
        </BaseDatePicker.ClearTrigger>
      </BaseDatePicker.Control>
      {error ? (
        <div data-scope={"date-picker"} data-part={"error"}>
          {error}
        </div>
      ) : null}
      <Portal>
        <BaseDatePicker.Positioner
          className={clsx(context.className, className)}
        >
          <BaseDatePicker.Content>
            <div data-scope={DATA_SCOPE} data-part="header">
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
