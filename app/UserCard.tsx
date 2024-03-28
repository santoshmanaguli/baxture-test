import {
  Avatar,
  Card,
  Text,
  Group,
  Title,
  Button,
  Tooltip,
} from "@mantine/core";
// import { UserIcon } from "@tabler/icons-react";
import styles from "./UserCard.module.css";
import Link from "next/link";

const UserCard = ({ user }: { user: any }) => {
  const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`;

  return (
    <Card
      shadow="md"
      withBorder
      radius="md"
      padding="xl"
      className={styles.cardContainer}
    >
      <Link href={"https://" + user.website} replace target="_blank">
        <Tooltip label={user.name} withArrow position="top">
          <Avatar
            src={avatarUrl}
            alt={user.name}
            size="100"
            className={styles.avatarImage}
          />
        </Tooltip>
      </Link>

      <Group justify="center">
        <div style={{ marginLeft: 10 }}>
          <Title order={4} fw={500} className={styles.cardTitle}>
            {user.name}
          </Title>
        </div>
      </Group>
      <Group style={{ gap: "5px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          color="grey"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-at"
          style={{ marginTop: "10" }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
        </svg>
        <Text style={{ marginTop: 10 }} c="dimmed" className={styles.onHover}>
          {user.email}
        </Text>
      </Group>

      <Group>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-phone-call"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          <path d="M15 7a2 2 0 0 1 2 2" />
          <path d="M15 3a6 6 0 0 1 6 6" />
        </svg>
        <Text c="dimmed" className={styles.onHover}>
          {user.phone}
        </Text>
      </Group>
      <Group>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-world"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 0 0 0 18" />
          <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
        <Text c="dimmed" className={styles.onHover}>
          {user.website}
        </Text>
      </Group>
      <Group style={{ marginTop: "20px" }} justify="center">
        <Button size="sm" className={styles.btn}>
          Follow
        </Button>
        <Button size="sm" variant="outline" className={styles.btn}>
          Delete
        </Button>
      </Group>
    </Card>
  );
};

export default UserCard;
