import FriendListItem from "./FriendListItem";
import css from "../friendlist/FriendList.module.css"

export default function FriendList({ friends }) {
	return (
		<ul className={css.friendslist}>
			{friends.map(item => {
				return (
					<li key={item.id} className={css.friendslistitem}>
						<FriendListItem friend={item} />
					</li>
				);
		})}		
    </ul>
    );
}