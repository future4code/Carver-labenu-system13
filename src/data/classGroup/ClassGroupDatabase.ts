import { ClassGroup } from "../../entities/classGroup/classGroup";
import { BaseDatabase } from "../BaseDatabase";


export class ClassGroupDataBase extends BaseDatabase{
    private static tableName = "labenu_system_class"

    createClassGroup = (classGroup: ClassGroup) => BaseDatabase.connection(ClassGroupDataBase.tableName)
        .insert({
            id: classGroup.getId(),
            class_name: classGroup.getName(),
            module: classGroup.getModule()
        })
    
        putClassGroupModule = (id: string, module: string) => BaseDatabase.connection(ClassGroupDataBase.tableName).update("module", module).where("id",id)
}