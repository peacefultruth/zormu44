export interface Arrangement {
  theAddressUserInput_reactTestId: string;
  theUsersMatchingAddressSuggestions_reactTestId: string;
  theSubmitButton_reactTestId: string;
  theErrorMessage_reactTestId: string;
  theLoadingState_reactTestId: string;
  theSuccessMessage_reactTestId: string;

  theSubmitButton__should_have_this_invalid_class: string;
  theErrorMessage_should_have_this_invalid_class: string;

  theAddressUserInput__when_it_has_the_valid_class_that_the_valid_class: string;
  theSubmitButton__when_it_has_the_valid_class_that_the_valid_class: string;

  theErrorMessage_should_have_a_class_saying_its_all_good_and_enjoy_yo_success_yo: string;

  theLoadingState__should_have_this_text_when_it_shouldnt_be_loading: string;
  theLoadingState__should_have_this_text_when_it_should_be_loading: string;

  theSuccessMessage__should_have_this_text: string;
}
