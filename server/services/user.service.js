import { createAvatar } from "@dicebear/core";
import { loreleiNeutral } from "@dicebear/collection";

const backgroundColors = ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf"];

export const createUserAvatar = (username) => {
  const avatar = createAvatar(loreleiNeutral, {
    seed: username,
    glassesProbability: 30,
  });

  return avatar.toString();
};
