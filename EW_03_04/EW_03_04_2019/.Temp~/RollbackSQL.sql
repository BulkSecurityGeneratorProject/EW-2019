-- Evento_Aposta [rel3]
alter table `aposta`   drop foreign key `fk_aposta_evento`;
alter table `aposta`  drop column  `evento_oid`;
-- User_Aposta [rel2]
alter table `aposta`   drop foreign key `fk_aposta_user`;
alter table `aposta`  drop column  `user_oid`;
-- Participante_Evento [rel1]
alter table `participante_evento`   drop foreign key `fk_participante_evento_evento`;
alter table `participante_evento`   drop foreign key `fk_participante_evento_partici`;
drop table `participante_evento`;
-- User_Group [User2Group_Group2User]
alter table `user_group`   drop foreign key `fk_user_group_group`;
alter table `user_group`   drop foreign key `fk_user_group_user`;
drop table `user_group`;
-- User_DefaultGroup [User2DefaultGroup_DefaultGroup2User]
alter table `user`   drop foreign key `fk_user_group`;
alter table `user`  drop column  `group_oid`;
-- Group_Module [Group2Module_Module2Group]
alter table `group_module`   drop foreign key `fk_group_module_module`;
alter table `group_module`   drop foreign key `fk_group_module_group`;
drop table `group_module`;
-- Group_DefaultModule [Group2DefaultModule_DefaultModule2Group]
alter table `group`   drop foreign key `fk_group_module`;
alter table `group`  drop column  `module_oid`;
-- Aposta [ent5]
drop table `aposta`;
-- Participante [ent4]
drop table `participante`;
-- Evento [ent3]
drop table `evento`;
-- User [User]
drop table `user`;
-- Module [Module]
drop table `module`;
-- Group [Group]
drop table `group`;
