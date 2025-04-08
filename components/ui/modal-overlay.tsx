"use client"

import type { ModalProps } from "@/lib/types"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function ModalOverlay({ isOpen, onClose, title, description, children }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden max-h-[80vh] md:max-h-[90vh] ml-[2%] mr-[5%] sm:mx-auto rounded-lg border-x-[5px] border-x-border sm:border-x-0 w-[93%] sm:w-[96%] md:w-auto">
        <div className="overflow-y-auto max-h-[calc(80vh-4rem)] md:max-h-[calc(90vh-4rem)] relative">
          {/* Close button in top right corner */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 opacity-70 hover:opacity-100 focus:outline-none z-20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <DialogHeader className="p-6 pb-2 pt-6 sticky top-0 bg-background z-10">
            <div>
              <DialogTitle className="text-xl">{title}</DialogTitle>
              {description && <DialogDescription className="mt-1">{description}</DialogDescription>}
            </div>
          </DialogHeader>
          <div className="px-6 pb-6">{children}</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
