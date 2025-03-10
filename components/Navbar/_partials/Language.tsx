import React, { Dispatch, Fragment, SetStateAction } from "react";
import { MdLanguage } from "react-icons/md";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  state: {
    isState: boolean;
    setIsState: Dispatch<SetStateAction<boolean>>;
  };
}

function Language({ state: { isState, setIsState } }: IProps) {
  return (
    <Fragment>
      <button
        onClick={() => setIsState((prev) => !prev)}
        className="flex h-10 cursor-pointer items-center justify-between gap-1 rounded-lg border-none px-2 text-base font-semibold text-davy-gray shadow-none hover:text-primary-two [&_svg]:flex-shrink-0"
      >
        <div className="flex items-center gap-1 [&_svg]:size-5">
          <MdLanguage /> English
        </div>
      </button>

      <AnimatePresence>
        {isState && (
          <motion.div
            className="absolute left-0 z-50 mt-2 rounded-md border bg-background py-2 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex min-w-max cursor-pointer items-center gap-1 bg-background px-4 py-2 text-base text-davy-gray hover:bg-gray-100">
              <Image
                src="/images/english-flag.jpg"
                alt="eng"
                width={100}
                height={100}
                className="aspect-square w-5 flex-shrink-0 rounded-full border border-primary-two object-cover"
              />
              <h3 className="font-medium">English</h3>
            </div>
            <div className="flex min-w-max cursor-pointer items-center gap-1 bg-background px-4 py-2 text-base text-davy-gray hover:bg-gray-100">
              <Image
                src="/images/indonesia-flag.png"
                alt="eng"
                width={100}
                height={100}
                className="aspect-square w-5 flex-shrink-0 rounded-full border border-primary-two object-cover"
              />
              <h3 className="font-medium">Indonesia</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
}

export default Language;
