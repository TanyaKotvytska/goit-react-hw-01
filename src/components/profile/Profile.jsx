import clsx from "clsx";
import css from "../profile/Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
    return (
<div className={css.container}>
<div className={css.imagecontainer}>
    <img className={css.photo}
    src={image}
    alt={name}
    />
    <p className={css.photoname}>{name}</p>
    <p className={css.phototag}>@{tag}</p>
    <p className={css.photolocation}>{location}</p>
</div>

<ul className={css.statslist}>
    <li className={css.listitem}>
    <span className={css.item}>Followers</span>
    <span className={css.itemnumber}>{stats.followers}</span>
    </li>
    <li className={css.listitem}>
    <span className={css.item}>Views</span>
    <span className={css.itemnumber}>{stats.views}</span>
    </li>
    <li className={css.listitem}>
    <span className={css.item}>Likes</span>
    <span className={css.itemnumber}>{stats.likes}</span>
    </li>
</ul>
</div>
    );
}