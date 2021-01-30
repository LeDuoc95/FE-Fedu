import React from 'react';
import { WrapperCard, ImageCard, TitleCard, ContentCard, AuthorCard, WrapperPriceCard, PriceCard, DescriptionCardStyle } from 'components/styles';

// https://i.imgur.com/nexvWcY.jpg : images dummy
// https://i.imgur.com/0jk1ek2.jpg : no images dummy

const Card = ({img, author, title, old_price, new_price, description_choice_us, type}) => {
    return (
        <WrapperCard card>
            <ImageCard type={type} src={img || 'https://i.imgur.com/0jk1ek2.jpg'} alt='cousre' />
            <ContentCard>
                <TitleCard type={type}>{title.length > 55 && type === "course" ? title.slice(0,52) + '...' : title.length > 20 ? title.slice(0,19) + '...' : title}</TitleCard>
                {author && <AuthorCard>
                    {author}
                </AuthorCard>}
                {old_price && new_price && <WrapperPriceCard>
                    <PriceCard old>{old_price || ''}</PriceCard>
                    <PriceCard new>{new_price}</PriceCard>
                </WrapperPriceCard>}
                {type === "choice" && <DescriptionCardStyle>
                    {description_choice_us.length > 180 ? description_choice_us.slice(0,179) + '...' : description_choice_us}
                </DescriptionCardStyle>}
            </ContentCard>
        </WrapperCard>
    )
}

export default Card;