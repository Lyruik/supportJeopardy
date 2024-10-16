/**
 *
 *########################################################################################################################################################################
 *########################################################################################################################################################################
 *##                                                                                                                                                                    ##
 *##                                                         REMINDER TO SELF THIS IS IN REPO AND PUBLIC                                                                ##
 *##                                                                                                                                                                    ##
 *########################################################################################################################################################################
 *########################################################################################################################################################################
 *
 * somewhere to help collect myself and "break" problems down
 *
 * we have cards now, so next up we probably want to make cards clickable and show question and stuff
 *
 * I know we said jeopardy but maybe it's better to do multiple choice? Or both? hmmmmmmmmmmmmmmmmmmmmmmmmmmmm
 *
 * maybe can add this to tests somehow? and update status? that could be cool
 */

const bigProblem = {
  cardsUsable: {
    clickable: {
      desc: "onclick? Link? decide how logic STARTS, also user feedback, cursor",
      status: 1,
    },
    transition: {
      desc: "spinny card? fade in? expand? probably expand. modal with fade?",
      status: 0,
      note: "Currently I definitely DO NOT want to change the page, so either animation/elements or like state and component",
    },
    loadQuestion: {
      desc: "input system (text box, multichoice, etc.)",
      status: 0,
      note: "If possible think about implementing a system users can highlight their choice before submitting, keyword THINK this is not MVP",
    },
    questionComplete: {
      desc: "need to return to full gameboard",
      status: 0,
      note: "I'd really love it if 'closing' the question dims the card out and no longer able to click/use.\
      Maybe later on you can still click it, but it is just the question and answers, so not interactable, but can revisit and see who answered what",
    },
  },
};
