// should ask norman about good practice where to place things like this, I want it to stay out of the tsx file so reading that FOCUSES on html/tsx stuff

// functions

/**
 * Function: openCard
 * @param idx index of the card being clicked
 * @returns idk if this will return yet? it mostly needs to manipulate the DOM and maybe I'm doing this TOTALLY wrong
 */
export const openCard = (idx: number) => {
  try {
    // it's a start pal
    console.log(idx);
  } catch (error: any) {
    throw new Error(error);
  }
};
