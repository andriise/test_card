import "@radix-ui/themes/styles.css";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  Box,
  Card,
  Flex,
  Avatar,
  Text,
  Button,
  Strong,
} from "@radix-ui/themes";

export const RadixComponent = () => {
  return (
    <Box maxWidth="500px">
      <Card size="5">
        <Flex direction="column" gap="7" align="center" justify="center">
          <Avatar
            size="8"
            src="https://www.tworeality.com/wp-content/uploads/2016/03/oculus-rift-tworeality-realtavirtuale.png"
            radius="full"
            fallback="T"
          />
          <Flex direction="column" gap="3">
            <Text as="div" size="2" weight="bold">
              Oculus Rift S
            </Text>
            <Text as="div" size="2" color="gray">
              PC powered VR gaming
            </Text>
            <Text as="div" size="2" color="red">
              <Strong>399$</Strong>
            </Text>
          </Flex>
          <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.Trigger asChild>
              <Button>Add to Card</Button>
            </DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Content>
              <DropdownMenuPrimitive.Item>
                Added to Card!
              </DropdownMenuPrimitive.Item>
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Root>
        </Flex>
      </Card>
    </Box>
  );
};
