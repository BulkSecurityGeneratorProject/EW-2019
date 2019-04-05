-- Student [ent1]
create table `student` (
   `oid`  integer  not null,
   `name`  varchar(255),
   `number`  varchar(255),
  primary key (`oid`)
);


-- Courses [ent2]
create table `courses` (
   `oid`  integer  not null,
   `name`  varchar(255),
   `ects`  integer,
  primary key (`oid`)
);


