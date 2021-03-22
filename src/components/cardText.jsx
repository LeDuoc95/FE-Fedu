import React from "react";
import {
  WrapperCard,
  ImageCard,
  DescriptionCardStyle,
  SignCardTextStyle,
  NameStyle,
} from "components/styles";

const CardText = ({ img, author, name, description_card_text, type }) => {
  return (
    <WrapperCard card_text>
      <SignCardTextStyle>&#8258;</SignCardTextStyle>
      <DescriptionCardStyle card_text>
        {description_card_text}
      </DescriptionCardStyle>
      <ImageCard
        card_text
        src={img || "https://i.imgur.com/0jk1ek2.jpg"}
        alt="icon-images"
      />
      <NameStyle>{name}</NameStyle>
    </WrapperCard>
  );
};

export default CardText;
