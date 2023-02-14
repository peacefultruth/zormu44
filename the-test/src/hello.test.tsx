/** @jest-environment jsdom */
import * as React from "react";
import * as TestingLibraryReact from "@testing-library/react";
import TestingLibraryUserEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import * as TopLevelTestApp from "./test-hello-the-app";
import { Arrangement } from "./arrangement";

// let console = require("console");
// const jestConsole = global.console;
// beforeEach(() => {
//   global.console = require("console");
// });
// afterEach(() => {
//   global.console = jestConsole;
// });

jest.setTimeout(11 * 1000);
test("Use Case: Address Autocomplete For A Production ECommerce >50mil$ dollah sale`z per year already", async () => {
  const arranged = arrange(arrangement);
  const actions: Actions = {
    arrangement,
    arranged,
    character,
    audience,
  };
  await act(actions);
});


interface Arranged {
  // user: ReturnType<typeof TestingLibraryUserEvent.setup>;
}
interface Actions {
  arrangement: Arrangement;
  arranged: Arranged;
  character: {
    type_this_slowly_into_the_input_as_my_address: string;
  };
  audience: {
    assert1_when_the_form_is_untouched: () => Promise<void> | void;
    assert1_when_the_form_is_untouched_and_the_submit_button_is_clicked__invalid_address: () => Promise<void> | void;
    assert2_after_the_address_autocomplete_has_been_filled_in: () => Promise<void> | void;
    assert3_after_the_address_autocomplete_suggestion_has_been_clicked: () => Promise<void> | void;
    assert4_after_the_submit_button_has_been_clicked__now_with_a_valid_address: () => Promise<void> | void;
    assert5_after_the_success_message_starts_showing: () => Promise<void> | void;
  };
}

const arrangement: Arrangement = {
  theAddressUserInput_reactTestId: "my-address",
  theUsersMatchingAddressSuggestions_reactTestId:
    "suggest-address-123-murder-st",
  theSubmitButton_reactTestId: "teslim-ol",
  theErrorMessage_reactTestId: "oh-no-an-error",
  theLoadingState_reactTestId: "wait-until-geroge-bush-gives-a-damn-about--",
  theSuccessMessage_reactTestId: "yeah",

  theSubmitButton__should_have_this_invalid_class: "invalid",
  theErrorMessage_should_have_this_invalid_class:
    "invalid--i-have-no-address-oh-no",

  theAddressUserInput__when_it_has_the_valid_class_that_the_valid_class:
    "valid",
  theSubmitButton__when_it_has_the_valid_class_that_the_valid_class: "valid",

  theErrorMessage_should_have_a_class_saying_its_all_good_and_enjoy_yo_success_yo:
    "enjoy-yo-error-free-existence",

  theLoadingState__should_have_this_text_when_it_shouldnt_be_loading: "fart",
  theLoadingState__should_have_this_text_when_it_should_be_loading:
    "hey-im-loading--",

  theSuccessMessage__should_have_this_text: "K",
};
const character: Actions["character"] = {
  type_this_slowly_into_the_input_as_my_address: "1234",
};
const audience: Actions["audience"] = {
  assert1_when_the_form_is_untouched: () => {
    const theErrorMessage = TestingLibraryReact.screen.getByTestId(
      arrangement.theErrorMessage_reactTestId
    );
    expect(theErrorMessage).toHaveClass(
      arrangement.theErrorMessage_should_have_a_class_saying_its_all_good_and_enjoy_yo_success_yo
    );

    const theSubmitButton = TestingLibraryReact.screen.getByTestId(
      arrangement.theSubmitButton_reactTestId
    );
    expect(theSubmitButton).toHaveClass(
      arrangement.theSubmitButton__should_have_this_invalid_class
    );

    const theSuccessMessage = TestingLibraryReact.screen.getByTestId(
      arrangement.theSuccessMessage_reactTestId
    );
    expect(theSuccessMessage).not.toHaveTextContent(
      arrangement.theSuccessMessage__should_have_this_text
    );
  },
  assert1_when_the_form_is_untouched_and_the_submit_button_is_clicked__invalid_address:
    async () => {
      const theErrorMessage = TestingLibraryReact.screen.getByTestId(
        arrangement.theErrorMessage_reactTestId
      );
      expect(theErrorMessage).toHaveClass(
        arrangement.theErrorMessage_should_have_this_invalid_class
      );
    },
  assert2_after_the_address_autocomplete_has_been_filled_in: () => {
    const nextInput = TestingLibraryReact.screen.getByTestId(
      arrangement.theAddressUserInput_reactTestId
    );
    expect(nextInput).toHaveValue(
      character.type_this_slowly_into_the_input_as_my_address
    );

    const theSubmitButton = TestingLibraryReact.screen.getByTestId(
      arrangement.theSubmitButton_reactTestId
    );
    expect(theSubmitButton).toHaveClass(
      arrangement.theSubmitButton__should_have_this_invalid_class
    );
  },
  assert3_after_the_address_autocomplete_suggestion_has_been_clicked:
    async () => {
      await TestingLibraryReact.waitFor(
        () => {
          const theAddressUserInput = TestingLibraryReact.screen.getByTestId(
            arrangement.theAddressUserInput_reactTestId
          );
          expect(theAddressUserInput).toHaveClass(
            arrangement.theAddressUserInput__when_it_has_the_valid_class_that_the_valid_class
          );
        },
        { timeout: 5000, interval: 50 }
      );

      const theSubmitButton = TestingLibraryReact.screen.getByTestId(
        arrangement.theSubmitButton_reactTestId
      );
      expect(theSubmitButton).toHaveClass(
        arrangement.theSubmitButton__when_it_has_the_valid_class_that_the_valid_class
      );

      const theLoadingState = TestingLibraryReact.screen.getByTestId(
        arrangement.theLoadingState_reactTestId
      );
      expect(theLoadingState).toHaveTextContent(
        arrangement.theLoadingState__should_have_this_text_when_it_shouldnt_be_loading
      );
    },
  assert4_after_the_submit_button_has_been_clicked__now_with_a_valid_address:
    async () => {
      const theErrorMessage = TestingLibraryReact.screen.getByTestId(
        arrangement.theErrorMessage_reactTestId
      );
      expect(theErrorMessage).toHaveClass(
        arrangement.theErrorMessage_should_have_a_class_saying_its_all_good_and_enjoy_yo_success_yo
      );

      let index = 0;
      while (index < 5) {
        try {
          console.log(`TESTING LOADING... ${index}`);
          index += 1;
          const theLoadingState = TestingLibraryReact.screen.getByTestId(
            arrangement.theLoadingState_reactTestId
          );
          expect(theLoadingState).toHaveTextContent(
            arrangement.theLoadingState__should_have_this_text_when_it_should_be_loading
          );
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve({});
            }, 1000);
          });
        } catch (anyError) {}
      }
    },
  assert5_after_the_success_message_starts_showing: () => {
    const theLoadingState = TestingLibraryReact.screen.getByTestId(
      arrangement.theLoadingState_reactTestId
    );
    expect(theLoadingState).toHaveTextContent(
      arrangement.theLoadingState__should_have_this_text_when_it_shouldnt_be_loading
    );

    const theSuccessMessage = TestingLibraryReact.screen.getByTestId(
      arrangement.theSuccessMessage_reactTestId
    );
    expect(theSuccessMessage).toHaveTextContent(
      arrangement.theSuccessMessage__should_have_this_text
    );
  },
};

const arrange = (arrangement: Arrangement) => {
  const ReactApp: React.FunctionComponent = () => {
    return <TopLevelTestApp.App arrangement={arrangement} />;
  };
  TestingLibraryReact.render(
    <React.StrictMode>
      <ReactApp />
    </React.StrictMode>
  );

  const arranged: Arranged = {
    // user,
  };
  return arranged;
};

const act = async (actions: Actions) => {
  const { arrangement, arranged: _, character, audience } = actions;

  const act1__the_submit_button_is_disabled_the_form_is_untouched =
    async () => {
      await audience.assert1_when_the_form_is_untouched();

      /**
       * TestingLibraryUserEvent has a bug where it doesn't do form submissions from button clicks
       * [https://github.com/testing-library/user-event/issues/401]
       */
      const theSubmitButton = TestingLibraryReact.screen.getByTestId(
        arrangement.theSubmitButton_reactTestId
      );
      expect(theSubmitButton).toBeInTheDocument();
      await TestingLibraryUserEvent.click(theSubmitButton);

      const theForm = TestingLibraryReact.screen.getByRole("form");
      expect(theForm).toBeInTheDocument();
      TestingLibraryReact.fireEvent.submit(theForm);

      await audience.assert1_when_the_form_is_untouched_and_the_submit_button_is_clicked__invalid_address();
    };

  const act2__i_fill_in_the_address_autocomplete = async () => {
    const theAddressUserInput = TestingLibraryReact.screen.getByTestId(
      arrangement.theAddressUserInput_reactTestId
    );

    await TestingLibraryUserEvent.type(
      theAddressUserInput,
      character.type_this_slowly_into_the_input_as_my_address,
      { delay: 100 }
    );

    await new Promise((resolve) => {
      setTimeout(resolve, 100);
    });

    await audience.assert2_after_the_address_autocomplete_has_been_filled_in();
  };

  const act3__i_wait_fo_my_suggestions_to_start_showing_up_that_i_can_click_and_have_my_address_validly_entered =
    async () => {
      try {
        await TestingLibraryReact.waitFor(
          async () => {
            const theSuggestionToSelect =
              await TestingLibraryReact.screen.findByTestId(
                arrangement.theUsersMatchingAddressSuggestions_reactTestId
              );
            if (!theSuggestionToSelect) {
              throw new Error("No suggestion found");
            }
            return theSuggestionToSelect;
          },
          { timeout: 5000, interval: 50 }
        );
      } catch (anyError) {}

      const theSuggestionToSelect =
        await TestingLibraryReact.screen.findByTestId(
          arrangement.theUsersMatchingAddressSuggestions_reactTestId
        );
      await TestingLibraryUserEvent.click(theSuggestionToSelect);

      try {
        await TestingLibraryReact.waitFor(
          async () => {
            const theAddressUserInput = TestingLibraryReact.screen.getByTestId(
              arrangement.theAddressUserInput_reactTestId
            );
            expect(theAddressUserInput).toHaveClass("valid");
            return theSuggestionToSelect;
          },
          { timeout: 5000, interval: 50 }
        );
      } catch (anyError) {}
    };

  const act4__i_click_the_submit_button_with_my_easily_entered_autocompleted_address_yay =
    async () => {
      const theSubmitButton = TestingLibraryReact.screen.getByTestId(
        arrangement.theSubmitButton_reactTestId
      );

      await TestingLibraryUserEvent.click(theSubmitButton);

      console.log("SUBMIT BUTTON CLICKED");

      await audience.assert4_after_the_submit_button_has_been_clicked__now_with_a_valid_address();
    };

  const act5__i_wait_for_the_success_message_to_show_up = async () => {
    try {
      await TestingLibraryReact.waitFor(
        async () => {
          const theSuccessMessage =
            await TestingLibraryReact.screen.findByTestId(
              arrangement.theSuccessMessage_reactTestId
            );
          if (!theSuccessMessage) {
            throw new Error("No success message found");
          }
          return theSuccessMessage;
        },
        { timeout: 5000, interval: 50 }
      );
    } catch (anyError) {}

    await audience.assert5_after_the_success_message_starts_showing();
  };

  await act1__the_submit_button_is_disabled_the_form_is_untouched();
  await act2__i_fill_in_the_address_autocomplete();
  await act3__i_wait_fo_my_suggestions_to_start_showing_up_that_i_can_click_and_have_my_address_validly_entered();
  await act4__i_click_the_submit_button_with_my_easily_entered_autocompleted_address_yay();
  await act5__i_wait_for_the_success_message_to_show_up();
};
