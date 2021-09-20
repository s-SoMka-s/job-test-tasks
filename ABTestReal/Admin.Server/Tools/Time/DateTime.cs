using System;

namespace Tools.Time
{
    public static class DateTimeExtensions
    {
        public static long ToTimestamp(this DateTimeOffset date)
        {
            var origin = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            var diff = date.ToUniversalTime() - origin;

            return (long)Math.Floor(diff.TotalSeconds);
        }

        public static long ToTimestamp(this DateTime date)
        {
            var origin = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            var diff = date.ToUniversalTime() - origin;

            return (long)Math.Floor(diff.TotalSeconds);
        }

        public static DateTime ParseTimestamp(long timestamp)
        {
            var result = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            result = result.AddSeconds(timestamp).ToUniversalTime();

            return result;
        }
    }
}
