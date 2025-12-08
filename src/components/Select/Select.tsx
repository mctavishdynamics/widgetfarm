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
import type { LabelRendererType } from "../../types/LabelRendererType";
import { renderLabel } from "../../utils/renderLabel";
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
  labelRenderer?: LabelRendererType;
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
    items = [],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSelect = () => {},
    ...rest
  } = props;

  const context = useSelectContext();

  const collection = createListCollection<T>({
    items,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
  });

  return (
    <ArkSelect.Root
      collection={collection}
      className={clsx(context.className, className)}
      positioning={{ offset: { mainAxis: 4 } }}
      {...rest}
    >
      {renderLabel({ label, labelRenderer }, (label) => {
        return <ArkSelect.Label>{label}</ArkSelect.Label>;
      })}
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
