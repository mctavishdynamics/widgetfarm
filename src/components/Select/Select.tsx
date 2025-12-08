import {
  Select as ArkSelect,
  createListCollection,
  Portal,
  type CollectionItem,
  type SelectRootProps,
} from "@ark-ui/react";
import { clsx } from "clsx";
import type { JSX } from "react";
import { TbCheck, TbChevronDown, TbX } from "react-icons/tb";
import type { LabelRenderer } from "../../LabelRenderer";
import { Button } from "../Button/Button";
import { useSelectContext } from "./useSelectContext";

export interface SelectOption extends CollectionItem {
  label: string;
  value: string;
  [key: string]: unknown;
}

export interface SelectProps<T extends SelectOption> extends Omit<
  SelectRootProps<T>,
  "collection" | "onSelect"
> {
  label?: string | JSX.Element;
  labelRenderer?: LabelRenderer;
  isDirty?: boolean;
  isInvalid?: boolean;
  isTouched?: boolean;
  items: Array<T>;
  onSelect: (item: T) => void;
}

export function Select<T extends SelectOption>(
  props: SelectProps<T>,
): JSX.Element {
  const {
    className,
    label,
    labelRenderer,
    isDirty = false,
    isInvalid = false,
    isTouched = false,
    items = [],
    onSelect = () => {},
    ...rest
  } = props;

  const context = useSelectContext();

  const collection = createListCollection<T>({
    items,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
  });

  let _label = label;

  if (typeof labelRenderer === "function") {
    if (labelRenderer({ isDirty, isInvalid, isTouched })) {
      _label = labelRenderer({ isDirty, isInvalid, isTouched });
    }
  }

  console.log(onSelect);

  return (
    <ArkSelect.Root
      collection={collection}
      className={clsx(context.className, className)}
      positioning={{ offset: { mainAxis: 4 } }}
      {...rest}
    >
      <ArkSelect.Label>{_label}</ArkSelect.Label>
      <ArkSelect.Control>
        <ArkSelect.Trigger>
          <ArkSelect.ValueText placeholder={"Select an option"} />
          <ArkSelect.Indicator>
            <TbChevronDown />
          </ArkSelect.Indicator>
        </ArkSelect.Trigger>
        <ArkSelect.ClearTrigger asChild>
          <Button>
            <TbX />
          </Button>
        </ArkSelect.ClearTrigger>
      </ArkSelect.Control>

      <Portal>
        <ArkSelect.Positioner className={clsx(context.className, className)}>
          <ArkSelect.Content>
            <ArkSelect.ItemGroup>
              {/*<ArkSelect.ItemGroupLabel>Group Label</ArkSelect.ItemGroupLabel>*/}
              {collection?.items.map((item) => {
                return (
                  <ArkSelect.Item key={item.value} item={item}>
                    <ArkSelect.ItemText>{item.label}</ArkSelect.ItemText>
                    <ArkSelect.ItemIndicator>
                      <TbCheck />
                    </ArkSelect.ItemIndicator>
                  </ArkSelect.Item>
                );
              })}
            </ArkSelect.ItemGroup>
          </ArkSelect.Content>
        </ArkSelect.Positioner>
      </Portal>
      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  );
}
