import "@radix-ui/themes/styles.css";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  Theme,
  ThemePanel,
  Box,
  Card,
  Flex,
  Avatar,
  Text,
  Button,
  Strong,
} from "@radix-ui/themes";
import "./RadixComponent.module.css";

export const RadixComponent = () => {
  return (
    <Box maxWidth="500px">
      <Card className="shadow" size="5">
        <Flex gap="3" align="center" justify="center">
          <Avatar
            size="5"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              Oculus Rift S
            </Text>
            <Text as="div" size="2" color="gray">
              PC powered VR gaming
            </Text>
            <Text as="div" size="2" color="red">
              <Strong>399$</Strong>
            </Text>
          </Box>
        </Flex>
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger asChild>
            <Button mt="30px">Add to Card</Button>
          </DropdownMenuPrimitive.Trigger>
          <DropdownMenuPrimitive.Content>
            <DropdownMenuPrimitive.Item>
              Added to Card!
            </DropdownMenuPrimitive.Item>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Root>
      </Card>
    </Box>
  );
};
