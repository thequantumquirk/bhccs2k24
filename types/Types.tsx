export interface Student {
  id?: number;
  name: string;
  email?: string;
  phone: string;
  isRep: boolean;
  events: Events[];
  id_proof_url: string;
  pay_proof_url: string;
}

export interface Events {
  id: number;
  name: string;
  maxPerDep: number;
}

type TopicData = {
  topicName: string;
  items: string[];
};

export type EventData = {
  name: string;
  description: string;
  id: number;
  slug: string;
  topicsData: TopicData[];
};
