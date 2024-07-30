// export default function handleSearchBar(event, input, stateManager) {
//   stateManager(event.target.value);
//   console.log(input);
// }

const handleSearchBar = (e, input, stateManager) => {
  stateManager(e.target.value);
};

export default {
  handleSearchBar,
};
