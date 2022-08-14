import { Button, useClipboard } from "@chakra-ui/react";

export default function CopyClipboardButton({ value, ...props }: any) {
  const { hasCopied, onCopy } = useClipboard(value);
  return (
    <Button onClick={onCopy} {...props}>
      {hasCopied ? "Copied" : "Copy"}
    </Button>
  );
}
