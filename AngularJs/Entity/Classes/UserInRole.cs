using System;
using System.Collections.Generic;

namespace AngularJs.Entity.Classes
{
    public partial class UserInRole
    {
        public int Id { get; set; }
        public long UserId { get; set; }
        public int RoleId { get; set; }
    }
}
