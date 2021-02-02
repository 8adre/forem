## Modals

Modals should be positioned centered in relation to entire viewport. So relation
to its trigger doesn’t really matter.

Use your best judgements when choosing the right size.

### Modal accessibility

The Preact Modal component utilises the `focus-trap` library to ensure that:

- When the modal is opened, focus is transferred to the first interactive item
  in that modal
- When the modal is closed, focus is transferred back to the button that
  activated the modal
- While the modal is open, focus is trapped inside so that when a user presses
  the Tab key, interactive items behind the modal are not focused

When using the HTML variant, the utility function `getFocusTrapToggle` can be
used to handle opening/closing the modal and the related focus trap.
