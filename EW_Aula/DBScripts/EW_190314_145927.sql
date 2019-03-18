-- Group [Group]
create table `group` (
   `oid`  integer  not null,
   `groupname`  varchar(255),
  primary key (`oid`)
);


-- Module [Module]
create table `module` (
   `oid`  integer  not null,
   `moduleid`  varchar(255),
   `modulename`  varchar(255),
  primary key (`oid`)
);


-- User [User]
create table `user` (
   `oid`  integer  not null,
   `username`  varchar(255),
   `password`  varchar(255),
   `email`  varchar(255),
   `plafond`  decimal(19,2),
  primary key (`oid`)
);


-- Evento [ent3]
create table `evento` (
   `oid`  integer  not null,
   `horainicio`  date,
   `horafim`  date,
   `n_participantes`  integer,
   `estado`  varchar(255),
   `vencedor`  varchar(255),
   `evento_equipa`  bit,
   `odd_empate`  double precision,
  primary key (`oid`)
);


-- Participante [ent4]
create table `participante` (
   `oid`  integer  not null,
   `nome`  varchar(255),
   `odd_vencer`  double precision,
   `equipa`  varchar(255),
  primary key (`oid`)
);


-- Aposta [ent5]
create table `aposta` (
   `oid`  integer  not null,
   `estado`  varchar(255),
   `montante`  integer,
  primary key (`oid`)
);


-- Group_DefaultModule [Group2DefaultModule_DefaultModule2Group]
alter table `group`  add column  `module_oid`  integer;
alter table `group`   add index fk_group_module (`module_oid`), add constraint fk_group_module foreign key (`module_oid`) references `module` (`oid`);


-- Group_Module [Group2Module_Module2Group]
create table `group_module` (
   `group_oid`  integer not null,
   `module_oid`  integer not null,
  primary key (`group_oid`, `module_oid`)
);
alter table `group_module`   add index fk_group_module_group (`group_oid`), add constraint fk_group_module_group foreign key (`group_oid`) references `group` (`oid`);
alter table `group_module`   add index fk_group_module_module (`module_oid`), add constraint fk_group_module_module foreign key (`module_oid`) references `module` (`oid`);


-- User_DefaultGroup [User2DefaultGroup_DefaultGroup2User]
alter table `user`  add column  `group_oid`  integer;
alter table `user`   add index fk_user_group (`group_oid`), add constraint fk_user_group foreign key (`group_oid`) references `group` (`oid`);


-- User_Group [User2Group_Group2User]
create table `user_group` (
   `user_oid`  integer not null,
   `group_oid`  integer not null,
  primary key (`user_oid`, `group_oid`)
);
alter table `user_group`   add index fk_user_group_user (`user_oid`), add constraint fk_user_group_user foreign key (`user_oid`) references `user` (`oid`);
alter table `user_group`   add index fk_user_group_group (`group_oid`), add constraint fk_user_group_group foreign key (`group_oid`) references `group` (`oid`);


-- Participante_Evento [rel1]
create table `participante_evento` (
   `participante_oid`  integer not null,
   `evento_oid`  integer not null,
  primary key (`participante_oid`, `evento_oid`)
);
alter table `participante_evento`   add index fk_participante_evento_partici (`participante_oid`), add constraint fk_participante_evento_partici foreign key (`participante_oid`) references `participante` (`oid`);
alter table `participante_evento`   add index fk_participante_evento_evento (`evento_oid`), add constraint fk_participante_evento_evento foreign key (`evento_oid`) references `evento` (`oid`);


-- User_Aposta [rel2]
alter table `aposta`  add column  `user_oid`  integer;
alter table `aposta`   add index fk_aposta_user (`user_oid`), add constraint fk_aposta_user foreign key (`user_oid`) references `user` (`oid`);


-- Evento_Aposta [rel3]
alter table `aposta`  add column  `evento_oid`  integer;
alter table `aposta`   add index fk_aposta_evento (`evento_oid`), add constraint fk_aposta_evento foreign key (`evento_oid`) references `evento` (`oid`);


-- Aposta_Participante [rel4]
alter table `aposta`  add column  `oid`  integer;
alter table `aposta`   add index fk_aposta_participante (`oid`), add constraint fk_aposta_participante foreign key (`oid`) references `participante` (`oid`);


-- ApostaEvento [rel5]
alter table `aposta`  add column  `evento_oid`  integer;
alter table `aposta`   add index fk_aposta_evento_2 (`evento_oid`), add constraint fk_aposta_evento_2 foreign key (`evento_oid`) references `evento` (`oid`);


-- ApostaUser [rel6]
alter table `aposta`  add column  `user_oid`  integer;
alter table `aposta`   add index fk_aposta_user_2 (`user_oid`), add constraint fk_aposta_user_2 foreign key (`user_oid`) references `user` (`oid`);


