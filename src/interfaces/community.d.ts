export interface CommunityPostType {
  postId: string;
  memberId: number;
  nickname: string;
  mbti: string;
  createdAt: string;
  profileImageUrl?: string;
  contents: string;
  postImageUrl: string;
  totalLikes: number;
  totalComments: number;
  isliked: boolean;
  lastPost?: boolean;
}

export interface CommunityType {
  posts?: CommunityPostType[];
  hasNext?: boolean;
}

export interface CommunityModalType {
  postId?: string;
  nickname?: string;
  profileImageUrl?: string;
  modalType: string;
  isOpen?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface CommunityPostMenuIconButtonType {
  postId: string;
  nickname: string;
  profileImageUrl?: string;
}

export interface CommunityPostTypographyButtonType {
  name?: string | undefined;
  margin?: string;
  children?: string | number;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
