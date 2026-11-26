"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { ComponentProps } from "react";
import styles from "./sheet.module.css";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export const SheetTitle = Dialog.Title;

// The shadcn Sheet composition, styled with the project’s CSS modules.
export function SheetContent({ className, children, ...props }: ComponentProps<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content {...props} className={[styles.content, className].filter(Boolean).join(" ")} data-lenis-prevent>
        {children}
        <Dialog.Close className={styles.close} aria-label="Close menu">
          <span aria-hidden="true">×</span>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
