import css from "../friendlistitem/FriendListItem.module.css"

export default function FriendListItem({ friend: { name, avatar, isOnline } }) {
	return (
        <div>
            <img src={avatar} alt={name} width="48" />
            <p className={css.friendname}>{name}</p>
            <p className={isOnline ? css.statusisOnline : css.statusisOffline}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}